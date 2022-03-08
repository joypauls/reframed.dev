---
title: Test2
description: sdfadaf
date: 2022-03-08T08:09:44.020Z
tags:
  - Math
---
## The Normal Distribution

insert plot here

![test](/images/uploads/test.jpg "IEEE-754 32-bit floating-point number")

The **normal distribution** is a two-parameter family with the density function:

$$
f(x|\mu,\sigma) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2} (\frac{x-\mu}{\sigma})^2}
$$

It has always struck me as a contradiction - a beautiful, intuitive curve and a gnarly, convoluted equation. When we look at the curve without the math, it just kind of *makes sense* doesn't it? Most of the density huddles around a central point, $\mu$, while it decays to $0$ as we venture further from the center, depending on $\sigma$. It's really easy to take for granted, but there is quite a lot of history to unpack here.

- - -

## Story Time 📖

The year is 1809 &mdash; de Moivre has already described a function similar to the normal curve while finding a continuous approximation of the binomial distribution. The utility of this approximation was mostly limited to aiding calculation of probabilities in binomial models. There has been much discussion around how to model statistical errors, particularly when dealing with noisy signals and imperfect measurement. Laplace proposed his own solution. However, there is a reason why so many call it the *Gaussian* distribution!

### Astronomical Errors

There was a sort of 19th century [Kaggle competition](link) going on at this time. Some astronomers with particularly shaky hands were tracking the motion of the protoplanet [Ceres](<>). On top of the fact that measurements performed by humans are imperfect, there was another big issue: Ceres disappears behind the Sun! 

Story of gauss astronomical errors and least squares average rise to prominence

## Gauss's Guidelines for an Error Distribution

1. Non-Uniformity

   * Small errors are more likely than large errors
2. Symmetry

   * Given any $\epsilon \in \mathbb{R}$, the errors $\epsilon$ and $-\epsilon$ are equally likely
3. Average as the Maximum Likelihood Estimator

   * The most likely value of the quantity repeatedly measured is the average of the measurements

### Non-Uniformity

### Symmetry

### Average as MLE

### Derivation

[^1]: Gauss’s Derivation of the Normal Distribution and the Method of Least Squares, 1809. (n.d.). A History of Parametric Statistical Inference from Bernoulli to Fisher, 1713–1935, 55–61. doi:10.1007/978-0-387-46409-1_7
[^2]: The Evolution of the Normal Distribution, Mathematics Magazine