# F1tenth — Time Trial Racing

## Overview

Race an F1-Tenth car around a track using any combination of onboard sensors (LiDAR, camera, IMU) and algorithms. Hardware modifications are not permitted; one car races at a time.

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

| # | Milestones | Description |
|---|-----------|-------------|
| 1 | Simulation | Develop and test all software modules in simulation |
| 2 | Lane following (IRL) | Integrate and test lane following with a single vehicle on the physical track |
| 3 | Robustness testing | Test under varied conditions (different lane widths, lighting, etc.) |
| 4 | Mid-semester race | First race at the halfway point of the project |
| 5 | Final race | Final race at the end of the semester |

## Bonus Points

<!-- - Mid-semester race: first place earns bonus points -->
- Final race: first and second place earn bonus points
<!-- - Creative solution -->

## Primary Mentor

James


## References

- [F1-Tenth (Illinois)](https://publish.illinois.edu/robotics-autonomy-resources/f1tenth/)
- [CSL Studio](https://maps.app.goo.gl/vXaAEQXA3FaB8PPs7)

