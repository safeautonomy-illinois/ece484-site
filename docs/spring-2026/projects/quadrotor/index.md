
# Drone Race

## Overview

<div style="display: flex; align-items: flex-start; gap: 1.5rem; flex-wrap: wrap;">
<div style="flex: 1; min-width: 200px;">
Develop controllers for Crazyflie drones to fly autonomously through gate-based obstacle courses. Starting in simulation (CrazySim), validated controllers are deployed to hardware, then optimized for a speed competition.
</div>
<img src="/ece484-site/assets/images/quadrotor-sketch.png" alt="Quadrotor drone" style="max-width: 200px; border-radius: 6px; flex-shrink: 0;">
</div>

## Objectives

All teams are required to complete the preliminary stages. All teams will participate in the competition, but will not be graded on relative performance.

- **Preliminary:** Achieve safe autonomous flight (no collisions) through all obstacle courses in the simulator
- **Preliminary:** Achieve safe autonomous flight (no collisions) via the Crazyflie through all obstacle courses in the flight arena
- **Competition:** Same as the hardware preliminary, competing against other teams

## Software Stack & Hardware

You will be provided with the following — your task is to develop robust controllers and operate the hardware using ROS2:

| Component | Description |
|-----------|-------------|
| **CrazySim** | Gazebo-based simulator for development and initial testing |
| **crazyswarm2** | ROS2-based autonomy stack for Crazyflie hardware |
| Obstacle course configs | Configuration files and scripts to generate your own tracks |
| Crazyflie drivers | Hardware drivers and ROS2 usage examples |
| State estimator | Basic state estimator for drone localization |

All necessary hardware will be provided.

## Milestones

| # | Time | Milestone | Description |
|---|------|-----------|-------------|
| 1 | First review | Setup | Setup simulator and become familiar with it. |
| 2 |  | Simulation | Develop all necessary software and validate flight in simulation |
| 3 |  | Hover & fly (ROS2) | Get the Crazyflie to hover and fly autonomously using ROS2 |
| 4 |  | Hardware flight | Test flight through obstacle courses in the testing arena with the Crazyflie |
| 5 |  | Optimization | Make creative optimizations to improve speed and robustness in the testing arena |
| 6 | Final presentation | Final race | Final race at the end of the semester and launch project site |

## Primary Mentor

Abhishek

## References

- [CrazySim (GitHub)](https://github.com/gtfactslab/CrazySim)
- [crazyswarm2 (GitHub)](https://github.com/IMRCLab/crazyswarm2)
- [Crazyflie Documentation](https://www.bitcraze.io/documentation/tutorials/getting-started-with-crazyflie-2-x/)
- [CSL Studio](https://maps.app.goo.gl/vXaAEQXA3FaB8PPs7)


