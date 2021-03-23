export function bindMethodsToComponent(componentScope, ...methodList) {
    // TODO: add unit test to assert that componentScope is pointing to a react component
    for (const method of methodList) {
        componentScope[method.name] = method.bind(componentScope);
    }
}