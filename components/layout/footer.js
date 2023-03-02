import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./footer.module.css";
import Link from "next/link";
export default function Footer() {
	const router = useRouter();
	const currentPath = router.asPath;
	const instagramClickHandler = () => {
		if (currentPath == "/curator") {
			fetch("/api/curator/click-instagram", {
				method: "POST",
				body: JSON.stringify({ message: "curator instagram clicked" }),
				headers: {
					"Content-Type": "application/json",
				},
			});
		} else if (currentPath == "/demo-player") {
			fetch("/api/demo-player/click-instagram", {
				method: "POST",
				body: JSON.stringify({ message: "demo-player instagram clicked" }),
				headers: {
					"Content-Type": "application/json",
				},
			});
		}
	};
	const homeClickHandler = () => {
		if (currentPath == "/curator") {
			fetch("/api/curator/click-home", {
				method: "POST",
				body: JSON.stringify({ message: "curator home clicked" }),
				headers: {
					"Content-Type": "application/json",
				},
			});
		} else if (currentPath == "/demo-player") {
			fetch("/api/demo-player/click-home", {
				method: "POST",
				body: JSON.stringify({ message: "demo-player home clicked" }),
				headers: {
					"Content-Type": "application/json",
				},
			});
		}
	};
	const facebookClickHandler = () => {
		if (currentPath == "/curator") {
			fetch("/api/curator/click-facebook", {
				method: "POST",
				body: JSON.stringify({ message: "curator facebook clicked" }),
				headers: {
					"Content-Type": "application/json",
				},
			});
		} else if (currentPath == "/demo-player") {
			fetch("/api/demo-player/click-facebook", {
				method: "POST",
				body: JSON.stringify({ message: "demo-player facebook clicked" }),
				headers: {
					"Content-Type": "application/json",
				},
			});
		}
	};
	return (
		<div
			className={
				currentPath == "/" ? styles.home_outer : styles.other_paths_outer
			}
		>
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
