import Footer from "./footer";

export default function Layout(props) {
	return (
		<div className="whole-outer">
			<main>{props.children}</main>
			<Footer />
		</div>
	);
}
