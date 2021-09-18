import { Icon } from "@fluentui/react";
import { useState } from "react";
import { Task } from "./taskCheckbox.props";
import { taskCheckboxStyles } from "./taskCheckBox.styles";

export const TaskCheckBox = (task: Task) => {

  const [touchStartTime, setTouchStartTime] = useState(performance.now());

  const handleClick = (e: any) => {
    e.preventDefault();
    const newValue = task.taskStatusId === 2 ? 3 : 2;
    const newTask = { ...task, taskStatusId: newValue };
    console.log(newTask.taskActivityId);
    task.onStatusChange(newTask);
  };

  const handleRightClick = (e: any) => {
    e.preventDefault();
    const newValue = 1;
    const newTask = { ...task, taskStatusId: newValue };
    task.onStatusChange(newTask);
  };
  const handleTouchStart = (e: any) => {
    e.preventDefault();
    let now = performance.now();
    setTouchStartTime(now);
    
  };
  const handleTouchEnd = (e: any) => {
    let now = performance.now();
    if (touchStartTime + 300 < now ) handleRightClick(e);
    else handleClick(e);
  };
  const renderBox = (statusId: number) => {
    switch (statusId) {
      case 1:
        return <Icon className={taskCheckboxStyles.clear} iconName="SquareShapeSolid" />;
      case 2:
        return <Icon className={taskCheckboxStyles.accepted} iconName="Accept" />;
      case 3:
        return <Icon className={taskCheckboxStyles.blocked} iconName="Cancel" />;
    }
  };
  return (
    <div
      className={taskCheckboxStyles.checkBox}
      onClick={handleClick}
      onContextMenu={handleRightClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {renderBox(task.taskStatusId)}
    </div>
  );
};
