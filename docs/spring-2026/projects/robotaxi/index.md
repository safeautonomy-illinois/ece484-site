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

1. **GPS coordinate receiver** — receives a target GPS location from a phone app (provided)
2. **Path planner** — decides how to enter the lane (heading south, north, etc.) and routes to the destination
3. **Park-to-drive controller** — takes the car out of the parking spot
4. **Camera-based lane-following controller** — lateral and longitudinal control; follows the planned path with possible stops
5. **Obstacle detector & distance estimator** — detects stop signs and traffic cones and estimates their distance

## Milestones

| # | Time | Milestone | Description |
|---|------|-----------|-------------|
| 1 | First review | Setup | Setup simulator and become familiar with it. |
| 2 |  | Simulation | Develop and test all software modules in the GEM simulator |
| 3 |  | Lane following (IRL) | Integrate and test the lane-following controller on the physical vehicle |
| 4 |  | Park-to-drive (IRL) | Integrate and test the park-to-drive and lane-following controllers for one initial parking spot |
| 5 |  | Full system (IRL) | Integrate and test the complete system with stop signs/traffic cones for all initial parking locations |
| 6 | Final presentation | Product launch | Final demo at the end of the semester and launch project site |
## Bonus Points

- Drive around an obstacle while staying inside the drivable region
- Start or end at a parking spot
- Stop at a stop sign or in response to brake lights
<!-- - Creative solution -->

## Primary Mentor

Fatemeh and Will

## References

- [Polaris GEM e2 User Manual](https://wiki.illinois.edu/wiki/display/GAG/Polaris+GEM+e2+User+Manual)
- [DRS Laboratory Safety Training](https://drs.illinois.edu/Page/Programs/LaboratorySafetyTraining)


