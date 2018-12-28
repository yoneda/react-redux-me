import React from 'react';

export const lifecycleHookRegister = (component,hooks) => {
  const componentWithHooks = class ComponentWithHooks extends React.Component{
    componentDidMount(){
      hooks.didMount(this.props);
    }
    componentWillMount(){
      hooks.willMount(this.props);
    }
    componentDidUpdate(){
      hooks.didUpdate(this.props);
    }
    render(){
      return(
        <div>
          {component(this.props)}
        </div>
      )
    }
  }
  return componentWithHooks;
}

export default lifecycleHookRegister;