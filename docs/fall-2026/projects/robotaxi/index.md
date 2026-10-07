# Robotaxi Summon (GEM)

## Overview

<div style="display: flex; align-items: flex-start; gap: 1.5rem; flex-wrap: wrap;">
<div style="flex: 1; min-width: 200px;">
Summon a full-scale GEM vehicle to a GPS coordinate via phone. The car must exit a parking spot, follow lanes autonomously, avoid obstacles, and stop within 2 m of the target.
</div>
<img src="/ece484-site/assets/images/gem-sketch.png" alt="GEM vehicle" style="max-width: 200px; border-radius: 6px; flex-shrink: 0;">
</div>

## Objectives

Your system will be evaluated on the following criteria:

- Detect the drivable region (lane following)
- Generate waypoints to the destination location
- Ensure the car stays in the drivable region for the entire journey
- Stop completely and automatically when an obstacle or stop sign is detected
- Resume automatically once the obstacle is removed
- Stop within 2 m of the goal

## System Modules

Your implementation should cover the following modules:

1. **GPS coordinate receiver** — receives a target GPS location 
2. **Path planner** — decides how to enter the lane (heading south, north, etc.) and routes to the destination
3. **Camera-based lane-following controller** — lateral and longitudinal control; follows the planned path with possible stops
4. **Obstacle detector & distance estimator** — detects stop signs and traffic cones and estimates their distance

## Milestones

| # | Time | Milestone | Description |
|---|------|-----------|-------------|
| 1 |  | Setup | Setup simulator and become familiar with it. |
| 2 |  Project Pitch | Simulation | Develop and test all software modules in the GEM simulator |
| 3 |  | Lane following (IRL) | Integrate and test the lane-following controller on the physical vehicle |
| 4 |  | Stop Sign Detection | Integrate the stop sign detector and controller that brings the vehicle to a full stop before proceeding.  |
| 5 |  | Full system (IRL) | Integrate and test the complete system with stop signs/traffic cones for all initial parking locations |

| 6 |  | Pedestrian Detection | (Groups of 4) Integrate pedestrian detection where the vehicle must wait for two pedestrians to separately cross the track before proceeding |
| 7 | Final presentation | Product launch | Final demo at the end of the semester and launch project site |
## Bonus Points

- Drive around an obstacle while staying inside the drivable region
- Start or end at a parking spot
<!-- - Creative solution -->

## Primary Mentor

Eric and Yuxi
## References

- [Polaris GEM e2 User Manual](https://publish.illinois.edu/robotics-autonomy-resources/gem-e2/)
- [Polaris GEM Simulator](https://github.com/UIUC-Robotics/gem_simulator)
- [DRS Laboratory Safety Training](https://drs.illinois.edu/Page/Programs/LaboratorySafetyTraining)


