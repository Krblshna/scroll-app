import { Link } from "react-router-dom";

type Props = {
    href: string;
    text: string;
};

export function LinkButton({ href, text }: Props) {
    return (
        <Link to={href}>
            <button type="button">{text}</button>
        </Link>
    );
}
