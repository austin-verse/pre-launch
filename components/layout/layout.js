import Footer from "./footer";

export default function Layout(props) {
	return (
		<div>
			<main>{props.children}</main>
			<Footer />
		</div>
	);
}
