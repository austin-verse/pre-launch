import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./home-footer.module.css";
import Link from "next/link";
export default function HomeFooter() {
	const router = useRouter();
	const currentPath = router.asPath;
	const instagramClickHandler = () => {
		fetch("/api/home/click-instagram", {
			method: "POST",
			body: JSON.stringify({ message: "home instagram clicked" }),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};
	const homeClickHandler = () => {
		fetch("/api/home/click-home", {
			method: "POST",
			body: JSON.stringify({ message: "home home clicked" }),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};
	const facebookClickHandler = () => {
		fetch("/api/home/click-facebook", {
			method: "POST",
			body: JSON.stringify({ message: "home facebook clicked" }),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};
	return (
		<div className={styles.outer}>
			<div className={styles.links}>
				<div>
					<Link
						style={{ textDecoration: "none" }}
						href={"/"}
						onClick={homeClickHandler}
					>
						<p className={styles.link_text}>Home</p>
					</Link>
				</div>
				<div className={styles.vertical_line}></div>
				<div>
					<Link
						style={{ textDecoration: "none" }}
						href={"https://www.instagram.com/quansume.official/"}
						passHref
						target="_blank"
						onClick={instagramClickHandler}
					>
						<p className={styles.link_text}>Instagram</p>
					</Link>
				</div>
				<div className={styles.vertical_line}></div>
				<div>
					<Link
						style={{ textDecoration: "none" }}
						href={"https://www.facebook.com/profile.php?id=100089094180872"}
						passHref
						target="_blank"
						onClick={facebookClickHandler}
					>
						<p className={styles.link_text}>Facebook</p>
					</Link>
				</div>
			</div>
			<p className={styles.email}>contact: qlquansume@gmail.com</p>
			<p className={styles.copyright}>
				© Quantize Labs.
				<br />
				All rights reserved.
			</p>
		</div>
	);
}
