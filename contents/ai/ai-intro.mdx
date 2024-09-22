---
title: AI intro
description: ''
date: 2024-05-27T14:49:43.971Z
preview: ''
draft: true
tags: []
categories: []
type: default
---

# OpenAI

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [AI Products](#ai-products)
- [GPT-3](#gpt-3)
- [Process](#process)
- [Embedding](#embedding)
- [Concepts](#concepts)
- [DALL-E](#dall-e)
  - [Model architecture(DALL-E)](#model-architecturedall-e)
- [Refs](#refs)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## AI Products

- GPT(Generative Pre-Training Transformer) 2018
- GPT-2 2019 - not open to public
- GPT-3 2020
- DALL-E 2021 - 256\*256 pixel limit, based on GPT-3
- DALL-E-2 2022 - 512\*512

## GPT-3

Deep learning model, human-like responses. Natural language processing(NLP) model that uses a transformer architecture. 175B parameters. Can be fine-tuned.

## Process

**Pre-training**: Pre-trained on a large corpus of text data to learn the statistical patterns of language. This involves training the model to predict the next word in a sequence given the preceding words. Normally with wikipedia data.

**Fine-tuning**: Once pre-training is complete, the model can be fine-tuned for specific downstream tasks, such as completion, translation or question answering. On a smaller dataset specific to the target task to optimize its performance.

+a) reinforcement learning from human feedback, safety mitigations...

## Embedding

**Tokenization**: Before processing text with GPT-3, the text is first tokenized breaking it into individual units such as words or subwords. The tokens are then encoded as dense vectors using a embedding matrix<sup>[1](#embedding_matrix)</sup>, allowing the model to understand the semantic relationship between tokens.

## Concepts

**Context window**: The number of tokens that the model uses as input to generate the next token in a sequence. Important parameter that can affect the performance of the model. If context window is small the model may not have enough information to accurately predict the next token in a sequence. If context window is too large the model may become expensive and may take longer to process each sequence. GPT-3 has 2048 to 4000 tokens.

e.g.

- San Fransisco is in the northern California
- ["San Fransisco", "is", "in", "the", "northern", "California"]
- ["San Fransisco", "is"] -> ["in"]
- ["San Fransisco", "is", "in", "the", "northern"] -> ["California"]

**Temperature**: Parameter that controls the randomness and creativity of the model's generation. It controls how "spread out" the distribution is, with higher temperature results in more random and diverse set of output tokens(leads to more errors and less coherent text) and lower is opposite.

**Generative process**: Generates text using a decoding process that involves predicting the probability distribution over possible tokens at each position in the sequence. The highest probabilty token is selected as the output, and the process is repeated to generate longer sequences of text.

**Optimizing error loss**: The difference between the model's predicted output and the correct output for a given task -> "loss function". Minimizing this error loss by adjusting the model's parameters through a process is called backpropagation. Lower error loss is better predicting the correct output

---

## DALL-E

Textual description as input -> generates an image that matches the description. The model is trained on a large dataset of text-image pairs. Using a combination of transformer networks for language modeling and convolutional neural networks(CNNs) for image generation.

**Preprocessing data**: Data collection of text-image pairs. Resizing, normalizing, tokenizing and encoding the textual descriptions.

**Training**: Combination of supervised learning and unsupervised learning. During unsupervised learning the model is trained to generate novel images from random noise vectors.

### Model architecture(DALL-E)

NLP + CNNs

```sh
Prompt -> CLIP text embedding -> Prior -> CLIP image embedding -> Decoder -> Image output
```

**CLIP**(Contrastive language-image pre-training): Goal is to learn a joint representation of both image and text.

Contrastive pre-training(Create matrix pair of text embeddings + image embeddings) -> Create dataset classifier from label text -> Use for zero-shote prediction

- Text embedding - Converts texts into mathmatical framework
- Prior stage - Generates rough sketch or low-resolution version of the image. Then refines it into a higher resolution(Autoregressive, Diffusion - Gradually add Gaussian noise and then reverse. The model learns the image)
- Image embedding - Image converted to continuous vectors in high-dimensional space
- Decoder(unCLIP) - Generating the image in multiple stages, each corresponds to a different level of detail and perspective(GLIDE diffusion model, starts from random noise results as image. When image is transformed into desired, it keeps certain properties(text, progressive growth etc.).)

## Refs

[introduction llm](https://github.com/datainsightat/introduction_llm)
[wiki](https://en.wikipedia.org/wiki/Large_language_model)

<a name="embedding_matrix">Can calculate the distance between words</a>
