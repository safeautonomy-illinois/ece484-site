# GEM Vehicle

## Overview

<div style="display: flex; align-items: flex-start; gap: 1.5rem; flex-wrap: wrap;">
<div style="flex: 1; min-width: 200px;">
Operate a full-scale GEM vehicle autonomously though a track consisting of a straightaway and two loops without navigating off course. The car must simultaneously have a perception system for stop sign and pedestrian detection.</div>
<img src="/ece484-site/assets/images/gem-sketch.png" alt="GEM vehicle" style="max-width: 200px; border-radius: 6px; flex-shrink: 0;">
</div>

## Objectives

Your system will be evaluated on the following criteria:

- Detect the drivable region (lane following)
- Generate waypoints within driveable region
- Ensure the car stays in the drivable region for the entire journey
- Stop completely and automatically when an obstacle or stop sign is detected
- Resume automatically after stopping

## System Modules

Your implementation should cover the following modules:

1. **Camera-based lane-following controller** — lateral and longitudinal control; follows the planned path with possible stops
2. **Obstacle detector & distance estimator** — detects stop signs and pedestrians and estimates their distance

## Milestones

| # | Time | Milestone | Description |
|---|------|-----------|-------------|
| 1 |  | Setup | Become comfortable working with GEM hardware and software setup |
| 2 |  Project Pitch | Demo |Run and become familiar with the Joystick controller demo code |
| 3 | Milestone Check-In | Lane following | Integrate and test the lane-following controller on the physical vehicle |
| 4 |  | Stop Sign Detection | Integrate the stop sign detector and controller that brings the vehicle to a full stop before proceeding.  |
| 5 |  |  Pedestrian Detection |  (Groups of 4) Integrate pedestrian detection where the vehicle must wait for two pedestrians to separately cross the track before proceeding  |
| 6 |  | Full System Evaluation | Evaluate the complete system and measure elapsed time to complete two laps around the track. |
| 7 | Final presentation | Product launch | Final demo at the end of the semester and launch project site |

## Bonus Points

- Drive around a cone that is in the way
- Autonomously detect and park in a parking spot
<!-- - Creative solution -->

## Primary Mentor

Eric and Yuxi
## References

- [GEM_WS demo/starter code](https://github.com/UIUC-Robotics/gem_ws)
- [Polaris GEM e2 User Manual](https://publish.illinois.edu/robotics-autonomy-resources/gem-e2/)
- [Polaris GEM Simulator](https://github.com/UIUC-Robotics/gem_simulator)
- [DRS Laboratory Safety Training](https://drs.illinois.edu/Page/Programs/LaboratorySafetyTraining)


