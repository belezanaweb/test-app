import styled from 'theme'

export const Container = styled.Modal`

`
export const Block = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    align-items: center;
    justify-content: center;
`
export const Content = styled.View`
    background-color: ${props => props.theme.backgroundPrimary};
    padding: 20px;
    width: 90%;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.black};
`

export const ButtonClose = styled.TouchableHighlight`

`
export const ButtonCloseText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: ${props => props.theme.black};
`
