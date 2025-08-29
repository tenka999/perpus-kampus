import { Link, useLocation } from 'react-router'
import { Ripple } from 'primereact/ripple'
import { classNames } from 'primereact/utils'
import React, { useContext,useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { MenuContext } from '../context/Context'
import { PanelMenu } from 'primereact/panelmenu'

const AppMenuitem = (props) => {
  const nodeRef = useRef(null);
  const { pathname } = useLocation()
  // const searchParams = useSearchParams()
  const { activeMenu, setActiveMenu } = useContext(MenuContext)
  const item = props.item
  const key = props.parentKey
    ? props.parentKey + '-' + props.index
    : String(props.index)
  const isActiveRoute = item.to && pathname === item.to
  const active = activeMenu === key || activeMenu.startsWith(key + '-')

//   const onRouteChange = (url) => {
//     console.log('Route changed to:', url)
//     if (item.to && item.to === url) {
//       setActiveMenu(key)
//     }
//   }

  // useEffect(() => {
  //   // Only update if this is an active route AND the activeMenu isn't already set to this key
  //   if (item.to && item.to === pathname && activeMenu !== key) {
  //     setActiveMenu(key)
  //   }
  // }, [activeMenu, item.to, key, pathname, searchParams, setActiveMenu])

  const itemClick = (event) => {
     if (item.disabled) {
       event.preventDefault();
       return;
     }

     if (item.command) {
       item.command({ originalEvent: event, item: item });
     }

     // toggle active state
     if (item.items) {
       setActiveMenu(active ? props.parentKey : key); // toggle submenu
     } else {
       setActiveMenu(key);
     }
  }

  const subMenu = item.items && item.visible !== false && (
    <CSSTransition
      nodeRef={nodeRef}
      timeout={{ enter: 1000, exit: 450 }}
      classNames='layout-submenu'
      in={props.root ? true : active}
      key={item.label}>
      <ul ref={nodeRef} >
        {item.items.map((child, i) => {
          return (
            <AppMenuitem
              item={child}
              index={i}
              className={child.badgeClass}
              parentKey={key}
              key={child.label}
            />
          )
        })}
      </ul>
    </CSSTransition>
  )

  return (
      // <PanelMenu model={item.items} />
    <li
      className={classNames({
        'layout-root-menuitem': props.root,
        'active-menuitem': active
      })}>
      {props.root && item.visible !== false && (
        <div className='layout-menuitem-root-text'>{item.label}</div>
      )}
      {(!item.to || item.items) && item.visible !== false ? (
        <a
          href={item.url}
          onClick={(e) => itemClick(e)}
          className={classNames(item.class, 'p-ripple')}
          target={item.target}
          tabIndex={0}>
          <i className={classNames('layout-menuitem-icon', item.icon)}></i>
          <span className='layout-menuitem-text'>{item.label}</span>
          {item.items && (
            <i className='pi pi-fw pi-angle-down layout-submenu-toggler'></i>
          )}
          <Ripple />
        </a>
      ) : null}

      {item.to && !item.items && item.visible !== false ? (
        <Link
          to={item.to}
          replace={item.replaceUrl}
          target={item.target}
          onClick={(e) => itemClick(e)}
          className={classNames(item.class, 'p-ripple', {
            'active-route': isActiveRoute
          })}
          tabIndex={0}>
          <i className={classNames('layout-menuitem-icon', item.icon)}></i>
          <span className='layout-menuitem-text'>{item.label}</span>
          {item.items && (
            <i className='pi pi-fw pi-angle-down layout-submenu-toggler'></i>
          )}
          <Ripple />
        </Link>
      ) : null}

      {subMenu}
    </li>
  )
}

export default AppMenuitem
