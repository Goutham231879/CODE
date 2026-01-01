import numpy as np 

"""
a = np.array([1,2,3,4])


print(a.ndim , a.size , a.dtype, a.shape)

print(np.zeros((2,2)))
print(np.ones((3,3)))
print(np.eye(4))
print(np.arange(0,10,2))
a = np.arange(6)

b = a.reshape((2,3))

print(b)

"""


a = np.arange(12)
b = a.reshape(3, 4)
c = b[:, :2]

print(c)