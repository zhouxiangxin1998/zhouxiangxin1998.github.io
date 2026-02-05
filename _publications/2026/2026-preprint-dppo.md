---
title:          "Rethinking the Trust Region in LLM Reinforcement Learning"
date:           2026-02-04 00:01:00 +0800
selected:       true
# pub:            "International Conference on Machine Learning (ICML)"
pub_post:       'Preprint.'
pub_date:       "2026"
abstract: >-
  The core ratio clipping mechanism in PPO is structurally ill-suited for the large vocabularies inherent to LLMs. PPO constrains policy updates based on the probability ratio of sampled tokens, which serves as a noisy single-sample Monte Carlo estimate of the true policy divergence. This motivate us to propose Divergence Proximal Policy Optimization (DPPO). Extensive experiments show its superior training stability and efficiency, offering a more robust foundation for LLM RL.
cover:          /assets/images/covers/cover2026_preprint_dppo.png
authors:
- Penghui Qi*
- Xiangxin Zhou*
- Zichen Liu
- Tianyu Pang
- Chao Du
- Min Lin
- Wee Sun Lee

links:
  Paper: https://arxiv.org/abs/2602.04879
---