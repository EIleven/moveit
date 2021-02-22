interface ButtonProps {
    color: string;
}

export function Button(props: ButtonProps) {
    return (
        <button type="button" style={{ backgroundColor: props.color }} >
            {props.color}
            <strong>Teste3</strong>
        </button>
    )
}