import * as React from 'react'
import { Container, Activity } from './styles'


interface IProps {

}


export const Loading: React.FunctionComponent<IProps> = (): JSX.Element => (
<Container>
  <Activity/>
</Container>
)

