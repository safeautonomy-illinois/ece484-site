# RacingSim (GRAIC) — Speed + Safety with Vision

## Overview

Develop a planner and controller for [GRAIC](https://popgri.github.io/Race/), an international autonomous racing competition. The project progresses from using ground truth inputs to completing obstacle-laden tracks using vision only.

## Objectives

- Complete the tracks using ground truth waypoints and obstacle information, beating the baseline scores with minimal collisions
- Complete the tracks using vision only (no ground truth inputs)

## System Modules

| Module | Description |
|--------|-------------|
| **Controller** | Follows ground truth waypoints around the track |
| **Planner** | Plans around obstacles and integrates with the controller |
| **Vision module** | Extracts waypoint and obstacle information from camera input |

## Milestones

| # | Milestone | Description |
|---|-----------|-------------|
| 1 | Controller | Develop a controller for ground truth waypoints |
| 2 | Planner + integration | Develop an obstacle planner and integrate it with the controller |
| 3 | Vision module | Develop the vision module to extract required track and obstacle information |
| 4 | Optimization | Optimize the full system to minimize collisions and lap time |


## Bonus Points

- Leaderboard performance: top-performing teams earn bonus points
- Successfully completing the track using vision with obstacles

## Primary Mentor

Hanna
## References

- [GRAIC Competition](https://popgri.github.io/Race/)


