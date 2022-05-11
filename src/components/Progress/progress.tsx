import React, { CSSProperties, FC } from 'react'
import { ThemeProps } from '../Icon/icon'

export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  style?: CSSProperties;
  theme?: ThemeProps
}

const Progress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight,
    showText,
    style,
    theme
  } = props

  return (
    <div className="axel-progress-bar">
      <div className="axel-progress-outer">
        <div
          className={`axel-progress-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span>{percent}%</span>}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary'
}

export default Progress
