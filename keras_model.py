import tensorflow as tf
from tensorflow import keras

import numpy as np
import pickle

with open("./data/train_inputs.pickle", "rb") as handle:
    train_inputs = pickle.load(handle)

with open("./data/train_labels.pickle", "rb") as handle:
    train_labels = pickle.load(handle)

model = keras.Sequential([
    keras.layers.Flatten(input_shape=(18,)),
    keras.layers.Dense(9, activation=tf.nn.relu),
    keras.layers.Dense(9, activation=tf.nn.softmax)
])

model.compile(optimizer=tf.train.AdamOptimizer(),
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

model.fit(train_inputs, train_labels, epochs=100)