import React, { Fragment } from 'react'
import { Header, Image } from 'semantic-ui-react'
import obamaImage from '../img/obama-mic-drop.gif'

const NotFound = () => (
  <Fragment>
    <Header size="huge" inverted color="blue">
      Page Not Found
    </Header>
    <Image src={obamaImage} className="notFound" />
  </Fragment>
)

export default NotFound
