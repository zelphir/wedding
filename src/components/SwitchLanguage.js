import React from 'react'

const SwitchLanguage = ({
  handleSwitchLanguage,
  active
}) => {
  const locale = ['en', 'it'].filter(l => l !== active)

  return (
    <div style={{
      position: 'absolute',
      top: 10,
      right: 10
    }}>
      <a
        href='#'
        data-lang={locale}
        onClick={handleSwitchLanguage}
      >
        <img
          src={require(`../images/${locale}.png`)}
          role='presentation'
          data-lang={locale}
          style={{width: 20}}
        />
      </a>
    </div>
  )
}

export default SwitchLanguage
