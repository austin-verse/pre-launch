import Image from "next/image";
import styles from "./home_content.module.css";
import Link from "next/link";
import HomeFooter from "./layout/home-footer";
import { useEffect } from "react";

export default function HomeContent() {
	const curatorClickHandler = () => {
		fetch("/api/home/click-curator", {
			method: "POST",
			body: JSON.stringify({ message: "home curator clicked" }),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};
	const demoPlayerClickHandler = () => {
		fetch("/api/home/click-demo-player", {
			method: "POST",
			body: JSON.stringify({ message: "home curator clicked" }),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	useEffect(() => {
		fetch("/api/home/home-visit");
	}, []);

	return (
		<div className={styles.outer}>
			<div className={styles.inner}>
				<Image
					src={"/images/quansume_logo_white.png"}
					alt="logo"
					width={146}
					height={81}
					className={styles.logo}
				/>
				<p className={styles.title}>
					음향기기 소비에
					<br />
					새로운 방법을 제시하다
				</p>
				<p className={styles.desc}>
					퀀타이즈랩스의 퀀슘은 음악을 사랑하는 남녀요소 누구나 쉽게 나에게 맞는
					<br className={styles.br} />
					음향기기를 구매할 수 있도록 도와주는 음향기기 플랫폼입니다.
				</p>
				<Link
					href={"/curator"}
					className={styles.link_outer}
					onClick={curatorClickHandler}
				>
					<p className={styles.link_text}>음향기기 AI 큐레이터</p>
					<Image src={"/images/to_right.png"} width={24} height={24} />
				</Link>
				<Link
					href={"/demo-player"}
					className={`${styles.link_outer} ${styles.link_outer_last}`}
					onClick={demoPlayerClickHandler}
				>
					<p className={styles.link_text}>음향기기 데모플레이어</p>
					<Image src={"/images/to_right.png"} width={24} height={24} />
				</Link>
			</div>
			<HomeFooter />
		</div>
	);
}
