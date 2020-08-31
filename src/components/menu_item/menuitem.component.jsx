import React from 'react'
import './menuitem.styles.scss'
import {withRouter} from 'react-router-dom'

export const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) =>(



    <div onClick = {()=>history.push(`${match.url}${linkUrl}`)} className={`menu-item ${size}`} style = {{backgroundImage:`url(${imageUrl})`}}  >   
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">Shop</span>
        </div>
    </div>
)

export default withRouter(MenuItem);