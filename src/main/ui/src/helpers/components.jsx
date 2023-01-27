
export const FlexBox = (props) => {
  const { children, style, ...divProps } = props;
  return (
    <div {...divProps} style={{ ...style, display: 'flex' }}>
      {children}
    </div>
  )
}

// export const ColumnFlexBox = ({ children, ...divProps }) => {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }} {...divProps}>
//       {children}
//     </div>
//   )
// }

export const ColumnFlexBox = (props) => {
  const { children, style, ...divProps } = props;
  return (
    <div {...divProps} style={{ ...style, display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  )
}

export const ErrorText = (props) => {
  return <div style={{ color: 'red' }}>{props.children}</div>
}
