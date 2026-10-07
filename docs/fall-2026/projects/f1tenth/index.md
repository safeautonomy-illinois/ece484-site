# F1tenth — Time Trial

## Overview

<div style="display: flex; align-items: flex-start; gap: 1.5rem; flex-wrap: wrap;">
<div style="flex: 1; min-width: 200px;">
Race an F1-Tenth car around a track using any combination of onboard sensors (LiDAR, camera, IMU) and algorithms. Hardware modifications are not permitted; one car races at a time.
</div>
<img src="/ece484-site/assets/images/f1tenthsketch.png" alt="F1Tenth car" style="max-width: 200px; border-radius: 6px; flex-shrink: 0;">
</div>

## Race Scoring

- **Base score:** time in seconds to traverse the track three times
- **+5 seconds** for each incidence of grazing or crashing into a barrier
- **+10 seconds** each time the car needs to be rescued (car is placed in the center of the lane where it was rescued)

*Lowest time wins.*

## Grading

Focus on completing the race without any rescues in the smallest amount of time.

## System Modules

| Module | Description |
|--------|-------------|
| **Car State** | Virtualizes ROS topics into Python-accessible functions and data |
| **Controller** | Computes control output given current and previous car states |
| **LiDAR/Camera perception** | Wall detection and obstacle detection |
| **Mapping** | Builds a map of the track environment |
| **Localization** | SLAM or vision-based localization using prior map or live sensing |
| **Path planner** | Determines the optimal path through the track |

## Milestones

| # | Time | Milestone | Description |
|---|------|-----------|-------------|
| 1 | | Software Setup | Setup simulator and become familiar with it. |
| 2 | Pitch Presentation | Hardware Setup | Run and become familiar with teleoperation and basic autonomous code |
| 3 |  | Simulation | Develop and test all software modules in simulation |
| 4 |  | Lane following (IRL) | Integrate and test lane following with a single vehicle on the physical track |
| 5 |  | Robustness testing | Test under varied conditions (different lane widths, lighting, etc.) |
| 6 |  | Mid-semester race | First race at the halfway point of the project |
| 7 |  Final presentation | Final race | Final race at the end of the semester and launch project site|

## Bonus Points

<!-- - Mid-semester race: first place earns bonus points -->
- Final race: first and second place earn bonus points
<!-- - Creative solution -->

## Primary Mentor

Taowei


## References

- [F1-Tenth (Illinois)](https://github.com/UIUC-Robotics/f1tenth_simulator)
- [CSL Studio](https://maps.app.goo.gl/vXaAEQXA3FaB8PPs7)

