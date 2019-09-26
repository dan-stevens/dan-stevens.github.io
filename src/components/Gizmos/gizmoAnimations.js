// Set of animations that create a new gizmo and set it down
export const craneOffScreen = (animate) => {
  const element = document.getElementById('crane');
  return (cssTransitionToPromise(animate, element, 'margin-left', '-50%'));
}

export const craneIntoScreen = (animate) => {
  const element = document.getElementById('crane');
  return (cssTransitionToPromise(animate, element, 'margin-left', '125px'));
}

export const gizmoIntoScreen = (animate) => {
  const element = document.getElementById('gizmoId');
  return (cssTransitionToPromise(animate, element, 'left', '25px'));
}

export const frameIntoScreen = (animate) => {
  const element = document.getElementById('frame');
  return (cssTransitionToPromise(animate, element, 'left', '25px'));
}

export const craneClawLeftOpen = (animate) => {
  const element = document.getElementById('crane-claw-left');
   return (cssTransitionToPromise(animate, element, 'transform', 'rotate(45deg)'));
}

export const craneClawRightOpen = (animate) => {
  const element = document.getElementById('crane-claw-right');
   return (cssTransitionToPromise(animate, element, 'transform', 'rotate(-45deg)'));
}

export const gizmoFall = (animate) => {
  const element = document.getElementById('gizmoId');
  return (cssAnimationToPromise(animate, element, 'gizmoFall', [], {property: 'bottom', value: '0px'}));
}

export const frameFall = (animate) => {
  const element = document.getElementById('frame');
  return (cssAnimationToPromise(animate, element, 'frameFall', [], {property: 'bottom', value: '0px'}));
}


export const dustClouds = (animate) => {
  const element = document.getElementById(animate.element);
  return (cssAnimationToPromise(animate, element, 'dustClouds', ['dustClouds']));
}

export const craneClawLeftClose = (animate) => {
  const element = document.getElementById('crane-claw-left');
   return (cssTransitionToPromise(animate, element, 'transform', 'rotate(0deg)'))
}

export const craneClawRightClose = (animate) => {
  const element = document.getElementById('crane-claw-right');
   return (cssTransitionToPromise(animate, element, 'transform', 'rotate(0deg)'))
}

export const craneReset = (animate) => {
  const element = document.getElementById('crane');
  return (cssTransitionToPromise(animate, element, 'margin-left', '100px'));
}



//Set of animations that use the mechanic to remove frame parts
export const mechanicAlign1 = (animate) => {
  const element = document.getElementById('gizmo-mechanic-outer');
   return (cssTransitionToPromise(animate, element, 'margin-left', '40%'))
}

export const mechanicRaise = (animate) => {
  const element = document.getElementById('gizmo-mechanic-outer');
  return (cssAnimationToPromise(animate, element, 'mechanicRaise'))
}

export const mechanicShake = (animate) => {
  const element = document.getElementById('gizmo-mechanic-upper');
  return (cssAnimationToPromise(animate, element, 'mechanicShake', ['mechanicShake']))
}

export const mechanicAlign2 = (animate) => {
  const element = document.getElementById('gizmo-mechanic-outer');
   return (cssTransitionToPromise(animate, element, 'margin-left', '10%'))
}

export const mechanicAlign3 = (animate) => {
  const element = document.getElementById('gizmo-mechanic-outer');
   return (cssTransitionToPromise(animate, element, 'margin-left', '25%'))
}

export const mechanicLower = (animate) => {
  const element = document.getElementById('gizmo-mechanic-outer');
  return (cssAnimationToPromise(animate, element, 'mechanicLower', ['mechanicRaise', 'mechanicLower']))
}

export const frameLower = (animate) => {
  const element = document.getElementById('frame');
   return (cssTransitionToPromise(animate, element, 'bottom', '-34%'))
}

export const mechanicOffScreen = (animate) => {
  const element = document.getElementById('gizmo-mechanic-outer');
   return (cssTransitionToPromise(animate, element, 'margin-left', '-60%'))
}

export const frameOffScreen = (animate) => {
  const element = document.getElementById('frame');
   return (cssTransitionToPromise(animate, element, 'left', '-60%'))
}

export const mechanicReset = (animate) => {
  const element = document.getElementById('gizmo-mechanic-outer');
   return (cssTransitionToPromise(animate, element, 'margin-left', '20px'))
}

// Set of animations that pick up a gizmo, move it to the converter, drop it, and reset.

//craneIntoScreen

// export const craneClawLower = (animate) => {
//   const element = document.getElementById('crane-line');
//    return (cssTransitionToPromise(animate, element, 'height', '300px'))
// }

// export const craneClawLeftClose = (animate) => {
//   const element = document.getElementById('crane-claw-left');
//    return (cssTransitionToPromise(animate, element, 'transform', 'rotate(0deg)'))
// }

// export const craneClawRightClose = (animate) => {
//   const element = document.getElementById('crane-claw-right');
//    return (cssTransitionToPromise(animate, element, 'transform', 'rotate(0deg)'))
// }

// export const craneClawPickup = (animate) => {
//   const element = document.getElementById('crane-line');
//    return (cssTransitionToPromise(animate, element, 'height', '100%'))
// }

// export const gizmoPickup = (animate) => {
//   const element = document.getElementById('gizmoId-' + animate.monsterNumber);
//    return (cssTransitionToPromise(animate, element, 'bottom', 'calc(100% - 200px'))
// }

// export const craneToDrop = (animate) => {
//   const element = document.getElementById('crane');
//    return (cssTransitionToPromise(animate, element, 'margin-left', '70%'))
// }

// export const monsterToDrop = (animate) => {
//   const element = document.getElementById('gizmoId-' + animate.monsterNumber);
//    return (cssTransitionToPromise(animate, element, 'left', '50%'))
// }

// //craneClawOpen

// export const monsterDrop = (animate) => {
//   const element = document.getElementById('gizmoId-' + animate.monsterNumber);
//    return (cssTransitionToPromise(animate, element, 'bottom', '0px'))
// }

//gizmoSpin

//craneReset


// Set of animations that set the gizmo, frame and lift down.

export const lowerLift = (animate) => {
  const element = document.getElementById('gizmo-lift');
  return (cssTransitionToPromise(animate, element, 'margin-top', '200px'))
}

export const lowerVehicle = (animate) => {
  const element = document.getElementById(animate.vehicleNumber);
  return (cssTransitionToPromise(animate, element, 'bottom', '-200px'))
}

export const rollOutVehicle = (animate) => {
  const element = document.getElementById(animate.vehicleNumber);
  return (cssAnimationToPromise(animate, element, 'vehicle-rollout'))
}

export const resetLift = (animate) => {
  const element = document.getElementById('gizmo-lift');
  return (cssTransitionToPromise(animate, element, 'margin-top', '0px'))
}


//Set of animations to swap out wheels

export const craneClawLower = (animate) => {
  const element = document.getElementById('crane-line');
   return (cssTransitionToPromise(animate, element, 'height', '300px'))
}

export const elementLower = (animate) => {
  const element = document.getElementById(animate.element);
   return (cssTransitionToPromise(animate, element, 'top', '300px'))
}

export const craneClawRaise = (animate) => {
  const element = document.getElementById('crane-line');
   return (cssTransitionToPromise(animate, element, 'height', '100%'))
}

// Add / remove transition event listeners
const cssTransitionToPromise = (animate, element, property, value) => {

return (
      new Promise(resolve => {
        element.style[property] = value;
        const transitionEnded = e => {
        if (e.propertyName !== property) {
          //console.log(e.propertyName);
          //console.log(property);
        return; //Wrong transition
        }
        else { 
          //console.log('ok so im here with ' + animate.animationName + ' who is done');
        element.removeEventListener('transitionend', transitionEnded);
          resolve(animate);
        }
      }
    element.addEventListener('transitionend', transitionEnded);
    })
  )
}

// Add / remove animation event listeners
const cssAnimationToPromise = (animate, element, classToAdd, classToRemove, styleToAdd) => {
return (
      new Promise(resolve => {
        element.classList.add(classToAdd);
        const animationEnded = e => {
        if (!e.target.classList.contains(classToAdd)) {
          //console.log(e.target.classList);
        return; //Wrong animation
        }
        else { 
          //console.log('else');
        element.removeEventListener('animationend', animationEnded);
          resolve(animate);
          //Remove a class after animation complete
          if (classToRemove !== undefined) {
            classToRemove.forEach(function(className) {
              e.target.classList.remove(className);
            });              
          }      
          //Add a style at animation end
          if (styleToAdd !== undefined) {
            element.style[styleToAdd.property] = styleToAdd.value;
          }
        }
      }
    element.addEventListener('animationend', animationEnded);
    })
  )
}