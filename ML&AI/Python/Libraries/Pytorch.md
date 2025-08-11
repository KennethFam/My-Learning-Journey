# Pytorch

## About this Document
- This document is only meant to store some generic information about the library. Please refer to the [Pytorch Documentation](https://pytorch.org/) if you need more information.

## Installation
- [Follow Pytorch's instructions](https://pytorch.org/get-started/locally/)

## Basics
- [Learn the Basics](https://docs.pytorch.org/tutorials/beginner/basics/intro.html) - Pytorch Documentation

### Tensors    
- [Tensors](https://docs.pytorch.org/tutorials/beginner/basics/tensorqs_tutorial.html)
    ```py
    import torch
    import numpy as np

    # creating tensors -----------------------------------------------------------------------------

    # creating tensor using data
    data = [[1, 2], [3, 4]]
    x_data = torch.tensor(data)

    # creating tensor using NumPy array
    np_array = np.array(data)
    x_np = torch.from_numpy(np_array)

    # creating tensor from another tensor
    # retains the properties (shape, datatype) of the argument tensor, unless explicitly overridden
    x_ones = torch.ones_like(x_data) # retains the properties of x_data
    print(f"Ones Tensor: \n {x_ones} \n")

    x_rand = torch.rand_like(x_data, dtype=torch.float) # overrides the datatype of x_data
    print(f"Random Tensor: \n {x_rand} \n")

    # creating tensors with random or constant values
    shape = (2, 3,)
    rand_tensor = torch.rand(shape)
    ones_tensor = torch.ones(shape)
    zeros_tensor = torch.zeros(shape)

    print(f"Random Tensor: \n {rand_tensor} \n")
    print(f"Ones Tensor: \n {ones_tensor} \n")
    print(f"Zeros Tensor: \n {zeros_tensor}")

    # tensor attributes -----------------------------------------------------------------------------
    tensor = torch.rand(3, 4)
    print(f"Shape of tensor: {tensor.shape}")
    print(f"Datatype of tensor: {tensor.dtype}")
    print(f"Device tensor is stored on: {tensor.device}\n")

    # tensor operations -----------------------------------------------------------------------------

    # moving our tensor to the current accelerator if available
    if torch.accelerator.is_available():
        tensor = tensor.to(torch.accelerator.current_accelerator())

    # numpy-like indexing and slicing:
    tensor = torch.ones(4, 4)
    print(f"First row: {tensor[0]}")
    print(f"First column: {tensor[:, 0]}")
    print(f"Last column: {tensor[..., -1]}")
    # zero out 2nd column
    tensor[:,1] = 0
    print(tensor)

    # concatenating a sequence of tensors along a given dimension
    # dim=1 means we are concatenating along the columns 
    # dim=0 would be along the rows 
    # the number of dimensions depends on your tensor shape
    t1 = torch.cat([tensor, tensor, tensor], dim=1)
    print(t1, "\n")

    # Artihmetic Operators

    # This computes the matrix multiplication between two tensors. y1, y2, y3 will have the same value
    # ``tensor.T`` returns the transpose of a tensor
    y1 = tensor @ tensor.T
    y2 = tensor.matmul(tensor.T)

    y3 = torch.rand_like(y1)
    torch.matmul(tensor, tensor.T, out=y3)


    # This computes the element-wise product. z1, z2, z3 will have the same value
    z1 = tensor * tensor
    z2 = tensor.mul(tensor)

    z3 = torch.rand_like(tensor)
    torch.mul(tensor, tensor, out=z3)

    # If you have a one-element tensor, for example by aggregating all values of a tensor into one value, you can convert it to a Python numerical value using item():
    agg = tensor.sum()
    agg_item = agg.item()
    print(agg, type(agg))
    print(agg_item, type(agg_item), "\n")

    # Operations that store the result into the operand are called in-place. They are denoted by a _ suffix. For example: x.copy_(y), x.t_(), will change x.
    print(f"{tensor} \n")
    tensor.add_(5)
    print(tensor, "\n")

    # Bridge with NumPy -----------------------------------------------------------------------------

    # Tensors on the CPU and NumPy arrays can share their underlying memory locations, and changing one will change the other.
    # Tensor to NumPy Array
    t = torch.ones(5)
    print(f"t: {t}")
    n = t.numpy()
    print(f"n: {n}", "\n")
    # A change in the tensor reflects in the NumPy array.
    t.add_(1)
    print("Tensor and NumPy Array after adding 1 to Tensor of ones:")
    print(f"t: {t}")
    print(f"n: {n}\n")

    # NumPy array to Tensor
    n = np.ones(5)
    t = torch.from_numpy(n)
    # Changes in the NumPy array reflects in the tensor.
    print("Tensor and NumPy Array after adding 1 to the NumPy array of ones:")
    np.add(n, 1, out=n)
    print(f"t: {t}")
    print(f"n: {n}")
    ```

### Datasets & DataLoaders
- Note: You may get an error if you try the code for this part: `FigureCanvasAgg is non-interactive, and thus cannot be shown plt.show()`. Please check out this [solution](https://stackoverflow.com/questions/77507580/userwarning-figurecanvasagg-is-non-interactive-and-thus-cannot-be-shown-plt-sh).
- [Datasets & DataLoaders](https://docs.pytorch.org/tutorials/beginner/basics/data_tutorial.html)
    ```py
    '''
    We ideally want our dataset code to be decoupled from our model training code for better readability and modularity.

    PyTorch provides two data primitives: torch.utils.data.DataLoader and torch.utils.data.Dataset that allow you to use pre-loaded datasets as well as your own data.

    Dataset stores the samples and their corresponding labels, and DataLoader wraps an iterable around the Dataset to enable easy access to the samples.
    '''

    import torch
    from torch.utils.data import Dataset
    from torchvision import datasets
    from torchvision.transforms import ToTensor
    import matplotlib.pyplot as plt

    # Loading a Dataset -----------------------------------------------------------------------------

    # We load the FashionMNIST Dataset with the following parameters:
    # root is the path where the train/test data is stored,
    # train specifies training or test dataset,
    # download=True downloads the data from the internet if it’s not available at root.
    # transform and target_transform specify the feature and label transformations
    training_data = datasets.FashionMNIST(
        root="data",
        train=True,
        download=True,
        transform=ToTensor()
    )

    test_data = datasets.FashionMNIST(
        root="data",
        train=False,
        download=True,
        transform=ToTensor()
    )

    # Iterating and Visualizing the Dataset -----------------------------------------------------------------------------

    # We can index Datasets manually like a list: training_data[index]. We use matplotlib to visualize some samples in our training data.
    labels_map = {
        0: "T-Shirt",
        1: "Trouser",
        2: "Pullover",
        3: "Dress",
        4: "Coat",
        5: "Sandal",
        6: "Shirt",
        7: "Sneaker",
        8: "Bag",
        9: "Ankle Boot",
    }
    figure = plt.figure(figsize=(8, 8))
    cols, rows = 3, 3
    for i in range(1, cols * rows + 1):
        sample_idx = torch.randint(len(training_data), size=(1,)).item()
        img, label = training_data[sample_idx]
        figure.add_subplot(rows, cols, i)
        plt.title(labels_map[label])
        plt.axis("off")
        '''
        squeeze (from PyTorch) returns a tensor with all specified dimensions of input of size 1 removed.

        Basically, squeeze removes the number of channels from img and only keep height and width, since img should be in format [C, H, W].

        We only want the height and width, so that we can plot it in a 2D space.
        '''
        plt.imshow(img.squeeze(), cmap="gray")
    plt.show()

    # Creating a Custom Dataset for your files -----------------------------------------------------------------------------

    '''
    A custom Dataset class must implement three functions: __init__, __len__, and __getitem__. Take a look at this implementation; the FashionMNIST images are stored in a directory img_dir, and their labels are stored separately in a CSV file annotations_file.
    '''

    import os
    import pandas as pd
    from torchvision.io import decode_image

    class CustomImageDataset(Dataset):
        '''
        The __init__ function is run once when instantiating the Dataset object. We initialize the directory containing the images, the annotations file, and both transforms
        '''
        def __init__(self, annotations_file, img_dir, transform=None, target_transform=None):
            self.img_labels = pd.read_csv(annotations_file)
            self.img_dir = img_dir
            self.transform = transform
            self.target_transform = target_transform

        '''
        The __len__ function returns the number of samples in our dataset.
        '''
        def __len__(self):
            return len(self.img_labels)
        
        '''
        The __getitem__ function loads and returns a sample from the dataset at the given index idx. Based on the index, it identifies the image’s location on disk, converts that to a tensor using decode_image, retrieves the corresponding label from the csv data in self.img_labels, calls the transform functions on them (if applicable), and returns the tensor image and corresponding label in a tuple.

        The csv file looks like this:
        tshirt1.jpg, 0
        tshirt2.jpg, 0
        ......
        ankleboot999.jpg, 9
        '''
        def __getitem__(self, idx):
            # iloc accesses and returns item at row idx and column 0 in a pandas dataframe
            img_path = os.path.join(self.img_dir, self.img_labels.iloc[idx, 0])
            image = decode_image(img_path)
            label = self.img_labels.iloc[idx, 1]
            if self.transform:
                image = self.transform(image)
            if self.target_transform:
                label = self.target_transform(label)
            return image, label

    # Preparing your data for training with DataLoaders -----------------------------------------------------------------------------

    '''
    Dataset retrieves our dataset’s features and labels one sample at a time. While training a model, we typically want to pass samples in “minibatches”, reshuffle the data at every epoch to reduce model overfitting, and use Python’s multiprocessing to speed up data retrieval.

    DataLoader is an iterable that abstracts this complexity for us in an easy API.
    '''
    from torch.utils.data import DataLoader

    train_dataloader = DataLoader(training_data, batch_size=64, shuffle=True)
    test_dataloader = DataLoader(test_data, batch_size=64, shuffle=True)

    # Iterate through the DataLoader -----------------------------------------------------------------------------

    '''
    We have loaded that dataset into the DataLoader and can iterate through the dataset as needed. Each iteration below returns a batch of train_features and train_labels (containing batch_size=64 features and labels respectively). Because we specified shuffle=True, after we iterate over all batches the data is shuffled
    '''
    # Display image and label.
    # iter() creates iterator from DataLoader and next gets the next batch
    train_features, train_labels = next(iter(train_dataloader))
    print(f"Feature batch shape: {train_features.size()}")
    print(f"Labels batch shape: {train_labels.size()}")
    img = train_features[0].squeeze()
    label = train_labels[0]
    plt.imshow(img, cmap="gray")
    plt.show()
    print(f"Label: {label}")
    ```

### Transforms
- [Transforms](https://docs.pytorch.org/tutorials/beginner/basics/transforms_tutorial.html)
    ```py
    '''
    Data does not always come in its final processed form that is required for training machine learning algorithms. We use transforms to perform some manipulation of the data and make it suitable for training.

    All TorchVision datasets have two parameters -transform to modify the features and target_transform to modify the labels - that accept callables containing the transformation logic.

    The torchvision.transforms module offers several commonly-used transforms out of the box.
    '''

    import torch 
    from torchvision import datasets
    from torchvision.transforms import ToTensor, Lambda

    '''
    The FashionMNIST features are in PIL Image format, and the labels are integers. For training, we need the features as normalized tensors, and the labels as one-hot encoded tensors. To make these transformations, we use ToTensor and Lambda.
    '''
    ds = datasets.FashionMNIST(
        root="data",
        train=True,
        download=True,
        transform=ToTensor(), # ToTensor is a callable class (has __call__ method defined), hence ()
        target_transform=Lambda(lambda y: torch.zeros(10, dtype=torch.float).scatter_(0, torch.tensor(y), value=1))
    )

    # ToTensor() -----------------------------------------------------------------------------
    '''
    ToTensor converts a PIL image or NumPy ndarray into a FloatTensor. and scales the image’s pixel intensity values in the range [0., 1.] (Note: . is Python shorthand for float literal).
    '''

    # Lambda Transforms
    '''
    Lambda transforms apply any user-defined lambda function. Here, we define a function to turn the integer into a one-hot encoded tensor. It first creates a zero tensor of size 10 (the number of labels in our dataset) and calls scatter_ which assigns a value=1 on the index as given by the label y.
    '''

    target_transform = Lambda(lambda y: torch.zeros(
        10, dtype=torch.float).scatter_(dim=0, index=torch.tensor(y), value=1))
    ```

### Build the Neural Network
- [Build the Neural Network](https://docs.pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html)
    ```py
    '''
    Neural networks comprise of layers/modules that perform operations on data. The torch.nn namespace provides all the building blocks you need to build your own neural network. Every module in PyTorch subclasses the nn.Module. A neural network is a module itself that consists of other modules (layers). This nested structure allows for building and managing complex architectures easily.

    In the following sections, we’ll build a neural network to classify images in the FashionMNIST dataset.
    '''

    import os
    import torch
    from torch import nn
    from torch.utils.data import DataLoader
    from torchvision import datasets, transforms

    # Get Device for Training -----------------------------------------------------------------------------

    # We want to be able to train our model on an accelerator such as CUDA, MPS, MTIA, or XPU. 
    # If the current accelerator is available, we will use it. Otherwise, we use the CPU.
    device = torch.accelerator.current_accelerator().type if torch.accelerator.is_available() else "cpu"
    print(f"Using {device} device\n")

    # Define the Class -----------------------------------------------------------------------------

    '''
    We define our neural network by subclassing nn.Module, and initialize the neural network layers in __init__. Every nn.Module subclass implements the operations on input data in the forward method.
    '''
    class NeuralNetwork(nn.Module):
        def __init__(self):
            super().__init__()
            self.flatten = nn.Flatten()
            self.linear_relu_stack = nn.Sequential( # container for modules
                # applies an affine linear transformation to the incoming data
                nn.Linear(28*28, 512), # (in_features, out_features, bias=True)
                # applies the rectified linear unit function element-wise
                nn.ReLU(),
                nn.Linear(512, 512),
                nn.ReLU(),
                nn.Linear(512, 10),
            )

        def forward(self, x):
            x = self.flatten(x)
            logits = self.linear_relu_stack(x) # runs data through modules
            return logits

    # We create an instance of NeuralNetwork, move it to the device, and print its structure.
    model = NeuralNetwork().to(device)
    print(model, "\n")

    '''
    To use the model, we pass it the input data. This executes the model’s forward, along with some background operations. Do not call model.forward() directly!

    Calling the model on the input returns a 2-dimensional tensor with dim=0 corresponding to each output of 10 raw predicted values for each class, and dim=1 corresponding to the individual values of each output. We get the prediction probabilities by passing it through an instance of the nn.Softmax module.
    '''
    X = torch.rand(1, 28, 28, device=device)
    logits = model(X)
    '''
    Applies the Softmax function to an n-dimensional input Tensor.

    Rescales them so that the elements of the n-dimensional output Tensor lie in the range [0,1] and sum to 1.

    When the input Tensor is a sparse tensor then the unspecified values are treated as -inf.

    returns a Tensor of the same dimension and shape as the input with values in the range [0, 1]
    '''
    pred_probab = nn.Softmax(dim=1)(logits)
    '''
    Returns the indices of the maximum value of all elements in the input tensor in dim=1

    pred_probab is already an input tensor

    Returns the indices of the maximum values of a tensor across a dimension.

    In this case, we only have 1 row, so we'll get a tensor of length 1, y_pred holds the index of the column for each row where the maximum probability resides. We only have 1 row, so we'll get a tensor of length 1.
    '''
    y_pred = pred_probab.argmax(1) # holds a class predication
    print(f"Predicted class: {y_pred}\n")

    # Model Layers -----------------------------------------------------------------------------
    '''
    Let’s break down the layers in the FashionMNIST model. To illustrate it, we will take a sample minibatch of 3 images of size 28x28 and see what happens to it as we pass it through the network.
    '''

    input_image = torch.rand(3, 28, 28)
    print(input_image.size(), "\n") # torch.Size([3, 28, 28])

    # nn.Flatten
    '''
    We initialize the nn.Flatten layer to convert each 2D 28x28 image into a contiguous array of 784 pixel values ( the minibatch dimension (at dim=0) is maintained).

    Flatten starts at dim=1 and ends at the last dim by default.
    '''
    flatten = nn.Flatten()
    flat_image = flatten(input_image)
    print(flat_image.size(), "\n") # torch.Size([3, 784])

    # nn.Linear
    '''
    The linear layer is a module that applies a linear transformation on the input using its stored weights and biases.
    '''
    layer1 = nn.Linear(in_features=28*28, out_features=20)
    hidden1 = layer1(flat_image)
    print(hidden1.size(), "\n") # torch.Size([3, 20])

    # nn.ReLU
    '''
    Non-linear activations are what create the complex mappings between the model’s inputs and outputs. They are applied after linear transformations to introduce nonlinearity, helping neural networks learn a wide variety of phenomena.

    In this model, we use nn.ReLU between our linear layers, but there’s other activations to introduce non-linearity in your model.
    '''
    print(f"Before ReLU: {hidden1}\n")
    hidden1 = nn.ReLU()(hidden1)
    print(f"After ReLU: {hidden1}\n")

    # nn.Sequential
    '''
    nn.Sequential is an ordered container of modules. The data is passed through all the modules in the same order as defined. You can use sequential containers to put together a quick network like seq_modules.
    '''

    seq_modules = nn.Sequential(
        flatten,
        layer1,
        nn.ReLU(),
        nn.Linear(20, 10)
    )
    input_image = torch.rand(3,28,28)
    logits = seq_modules(input_image)
    print(f"logits: {logits}\n")

    # nn.Softmax
    '''
    The last linear layer of the neural network returns logits - raw values in [-infty, infty] - which are passed to the nn.Softmax module. The logits are scaled to values [0, 1] representing the model’s predicted probabilities for each class. dim parameter indicates the dimension along which the values must sum to 1.

    The dim parameter dictates across which dimension the softmax operations is done. Basically, the softmax operation will transform your input into a probability distribution i.e. the sum of all elements will be 1.

    Here is how you can think of dim:
    dim=0 → collapse over the vertical axis (down the rows) → you’re left with results per column.
    dim=1 → collapse over the horizontal axis (across the columns) → you’re left with results per row.
    '''
    softmax = nn.Softmax(dim=1)
    pred_probab = softmax(logits)
    # each row should sum to 1
    print(f"pred_probab: {pred_probab}\n")

    # Model Parameters -----------------------------------------------------------------------------
    '''
    Many layers inside a neural network are parameterized, i.e. have associated weights and biases that are optimized during training. Subclassing nn.Module automatically tracks all fields defined inside your model object, and makes all parameters accessible using your model’s parameters() or named_parameters() methods.

    In this example, we iterate over each parameter, and print its size and a preview of its values.
    '''
    print(f"Model structure: {model}\n")
    for name, param in model.named_parameters():
        print(f"Layer: {name} | Size: {param.size()} | Values : {param[:2]} \n")
    ```

## Datasets
- PyTorch offers domain-specific libraries such as [TorchText](https://pytorch.org/text/stable/index.html), [TorchVision](https://pytorch.org/vision/stable/index.html), and [TorchAudio](https://pytorch.org/audio/stable/index.html), all of which include datasets. For this tutorial, we will be using a TorchVision dataset.

## Links
- [Pytorch Website](https://pytorch.org/)
- [Code after completing Quick Start Guide on Pytorch website](https://github.com/KennethFam/Clothes-Classifier)
