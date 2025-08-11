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

## Datasets
- PyTorch offers domain-specific libraries such as [TorchText](https://pytorch.org/text/stable/index.html), [TorchVision](https://pytorch.org/vision/stable/index.html), and [TorchAudio](https://pytorch.org/audio/stable/index.html), all of which include datasets. For this tutorial, we will be using a TorchVision dataset.

## Links
- [Pytorch Website](https://pytorch.org/)
- [Code after completing Quick Start Guide on Pytorch website](https://github.com/KennethFam/Clothes-Classifier)
