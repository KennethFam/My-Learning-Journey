# Machine Learning

## About this Document
- This document is only meant to store some generic information about the library. Please refer to the [Pytorch Documentation](https://pytorch.org/) if you need more information.

## Workflow
- Most machine learning workflows involve working with data, creating models, optimizing model parameters, and saving the trained models.

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
