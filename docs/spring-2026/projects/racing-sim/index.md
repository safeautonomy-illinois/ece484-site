# GRAIC — Racing Simulation

## Overview

<div style="display: flex; align-items: flex-start; gap: 1.5rem; flex-wrap: wrap;">
<div style="flex: 1; min-width: 200px;" markdown="1">
Develop a planner and controller for [GRAIC](https://popgri.github.io/Race/), an international autonomous racing competition. The project progresses from using ground truth inputs to completing obstacle-laden tracks using vision only.
</div>
<img src="/ece484-site/assets/images/GRAIC.png" alt="GRAIC racing simulation" style="max-width: 200px; border-radius: 6px; flex-shrink: 0;">
</div>

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

| # | Time | Milestone | Description |
|---|------|-----------|-------------|
| 1 | First review | Setup | Setup simulator and become familiar with it. |
| 2 |  | Controller | Develop a controller for ground truth waypoints |
| 3 |  | Planner + integration | Develop an obstacle planner and integrate it with the controller |
| 4 |  | Vision module | Develop the vision module to extract required track and obstacle information |
| 5 |  | Optimization | Optimize the full system to minimize collisions and lap time |
| 6 | Final presentation | Final race | Final race at the end of the semester and launch project site |

## Bonus Points

- Leaderboard performance: top-performing teams earn bonus points
- Successfully completing the track using vision with obstacles

## Primary Mentor

Hanna
## References

- [GRAIC Competition](https://popgri.github.io/Race/)
- [ECE484 GRAIC Installation Guide](/ece484-site/assets/pdfs/spring-2026/GRAIC%202026%20Installation%20(ECE484%20Version).pdf)


