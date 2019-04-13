import styled from 'theme'


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Activity = styled.ActivityIndicator`
    color: ${props => props.theme.primary};
`
