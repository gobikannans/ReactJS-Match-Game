import './index.css'

const TabItem = props => {
  const {tabDetails, updateTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const Active = isActive ? 'btn-active' : ''

  const updateTabImg = () => {
    updateTab(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-heading ${Active}`}
        onClick={updateTabImg}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
