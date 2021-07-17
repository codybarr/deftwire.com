import * as React from 'react'
import P from 'prop-types'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const color = ''

const BUTTON_CLASSES = {
  primary: 'rounded bg-deft hover:bg-deft-light text-white shadow',
}

const ButtonContainer = styled.button``

const Button = ({
  className = '',
  children,
  palette = 'primary',
  ...props
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        rotate: 5,
      }}
      whileTap={{
        scale: 1.3,
        rotate: 7,
      }}
      className={className}
    >
      <ButtonContainer
        className={`inline-block px-4 py-2 ${BUTTON_CLASSES[palette]}`}
        {...props}
      >
        {children}
      </ButtonContainer>
    </motion.div>
  )
}

Button.propTypes = {
  children: P.node.isRequired,
  palette: P.oneOf(['primary']),
}

Button.defaultProps = {
  palette: 'primary',
}

export default Button
