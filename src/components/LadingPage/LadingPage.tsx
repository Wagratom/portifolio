import { useEffect, useRef, useState } from "react";

import Phaser from "phaser";
import background from "../../assets/planets/backgrounds/backgroundLanderPage.jpg";
import planetaAnel from '../../assets/planets/planetaJupter.png';
import _42SP from '../../assets/landingPage/42SP.png';
import planetaLua from '../../assets/planets/PlanetaLua.png';
import Lua from '../../assets/planets/lua.png';
import planetaTerra from '../../assets/planets/PlanetaTerra.png';
import satelete from '../../assets/planets/satelete.png';
import AWS from '../../assets/landingPage/aws1.png';

import naveFrente from '../../assets/nave/naveFrente.png';
import naveCostas from '../../assets/nave/naveCostas.png';
import naveDescendo from '../../assets/nave/naveDescendo.png';
import naveLateral from '../../assets/nave/naveLateral.png';
import Perfil from "../Perfil/Perfil";
import PageSchool42 from "../PageSchool42/PageSchool42";
import AWSPage from "../AWSPage/AWSPage";

export type dataConvite = {
	otherId: string,
	myNickname: string,
}

export default function LadingPage(): JSX.Element {

	let [collisionPnt, setCollisionPnt] = useState<string>('');
	const gameContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!gameContainerRef.current) return

		class GameData extends Phaser.Scene {
			nave: Phaser.Physics.Arcade.Sprite
			pntAnel: Phaser.Physics.Arcade.Sprite
			pnt42SP: Phaser.Physics.Arcade.Sprite
			luaTerra: Phaser.Physics.Arcade.Sprite
			pntTerra: Phaser.Physics.Arcade.Sprite
			sateleteChat: Phaser.Physics.Arcade.Sprite
			AWS: Phaser.Physics.Arcade.Sprite
			background: Phaser.GameObjects.Sprite
			constructor() {
				super({ key: 'MyGameScene' });
				this.nave = {} as Phaser.Physics.Arcade.Sprite;
				this.pntAnel = {} as Phaser.Physics.Arcade.Sprite;
				this.pnt42SP = {} as Phaser.Physics.Arcade.Sprite;
				this.luaTerra = {} as Phaser.Physics.Arcade.Sprite;
				this.pntTerra = {} as Phaser.Physics.Arcade.Sprite;
				this.sateleteChat = {} as Phaser.Physics.Arcade.Sprite;
				this.AWS = {} as Phaser.Physics.Arcade.Sprite;
				this.background = {} as Phaser.GameObjects.Sprite;
			}

			calculeScaleNave(valueEixoX: number, valueEixoY: number) {
				let percentageX = (valueEixoX * 100 / this.scale.width) / 1000;
				percentageX *= percentageX > 0.06 ? 2 : 1;
				return percentageX + 0.1;
			}

			handleCollision(planetName: string) {
				if (collisionPnt !== planetName) setCollisionPnt(planetName);
			}

			setupColliders() {
				this.physics.add.collider(this.nave, this.pntTerra, () => this.handleCollision("planetTerra"));
				this.physics.add.collider(this.nave, this.pnt42SP, () => this.handleCollision("planet42SP"));
				this.physics.add.collider(this.nave, this.pntAnel, () => this.handleCollision("planetAnel"));
				this.physics.add.collider(this.nave, this.sateleteChat, () => this.handleCollision("satelite"));
				this.physics.add.collider(this.nave, this.AWS, () => this.handleCollision("AWS"));
				this.physics.add.collider(this.nave, this.luaTerra, () => this.handleCollision("Lua"));
			}

			preload(this: Phaser.Scene) {
				// Carregue suas imagens aqui, se necessário
				this.load.image("background", background);
				this.load.image("planetAnel", planetaAnel);
				this.load.image("42SP", _42SP);
				this.load.image("planetLua", planetaLua);
				this.load.image('planetTerra', planetaTerra);
				this.load.image('satelete', satelete);
				this.load.image('AWS', AWS);
				this.load.image('Lua', Lua);

				this.load.image('naveFrente', naveFrente);
				this.load.image('naveCostas', naveCostas);
				this.load.image('naveDescendo', naveDescendo);
				this.load.image('naveLateral', naveLateral);
			}

			resizee() {
				const containerWidth = window.innerWidth;
				const containerHeight = window.innerHeight;

				// Redimensionar o plano de fundo
				this.background.setScale(containerWidth / this.background.width, containerHeight / this.background.height);
				this.background.setPosition(containerWidth / 2, containerHeight / 2);

				// Reposicionar todos os elementos na tela
				this.pntTerra.x = containerWidth * 0.6;
				this.pntTerra.y = containerHeight * 0.3;
				this.luaTerra.x = containerWidth * 0.57;
				this.luaTerra.y = containerHeight * 0.25;
				this.pnt42SP.x = containerWidth * 0.1;
				this.pnt42SP.y = containerHeight * 0.2;
				this.pntAnel.x = containerWidth * 0.9;
				this.pntAnel.y = containerHeight * 0.8;
				this.sateleteChat.x = containerWidth * 0.6;
				this.sateleteChat.y = containerHeight * 0.7;
				this.AWS.x = containerWidth * 0.92;
				this.AWS.y = containerHeight * 0.2;

				// Reposicionar a nave no centro da tela
				this.nave.x = containerWidth / 2;
				this.nave.y = containerHeight / 2;

				//redimecionar a navex
				if (this.physics.world) {
					this.physics.world.setBounds(0, 0, containerWidth, containerHeight);
				}
			}

			checkResize() {
				// Adiciona um ouvinte de evento para o redimensionamento da janela
				window.addEventListener('resize', () => {
					this.resizee();
				});
			}

			create() {
				const containerWidth = this.scale.width;
				const containerHeight = this.scale.height;

				this.input.on('pointerdown', () => {
					setCollisionPnt('');
				});

				// added background in the center of the scrren
				this.background = this.add.sprite(containerWidth / 2, containerHeight / 2, "background");
				this.background.setScale(containerWidth / this.background.width, containerHeight / this.background.height); // Redimensiona o fundo para preencher a tela

				// added nave in the center of the scrren
				this.nave = this.physics.add.sprite((containerWidth / 2), (containerHeight / 2), "naveFrente");
				this.nave.setCollideWorldBounds(true); // Define a colisão com os limites do mundo
				this.nave.setScale(this.calculeScaleNave(containerWidth / 2, containerHeight / 2)); // Redimensiona a nave para que ela seja proporcional ao tamanho da tela

				this.pnt42SP = this.physics.add.sprite((containerWidth * 0.1), (containerHeight * 0.2), "42SP").setImmovable()
				this.pntAnel = this.physics.add.sprite((containerWidth * 0.9), (containerHeight * 0.8), "planetAnel").setImmovable()
				this.pntTerra = this.physics.add.sprite((containerWidth * 0.6), (containerHeight * 0.3), "planetTerra").setImmovable()
				this.luaTerra = this.physics.add.sprite((containerWidth * 0.57), (containerHeight * 0.25), "Lua").setImmovable()
				this.sateleteChat = this.physics.add.sprite((containerWidth * 0.6), (containerHeight * 0.7), "satelete").setImmovable()
				this.AWS = this.physics.add.sprite((containerWidth * 0.92), (containerHeight * 0.2), "AWS").setImmovable()

				this.AWS.setScale(0.28)
				this.luaTerra.setScale(0.3)
				this.pntTerra.setScale(0.7)
				this.sateleteChat.setScale(0.2)
				this.sateleteChat.setAngle(295)
				this.pnt42SP.setScale(0.2)

				this.physics.world.setBounds(0, 0, containerWidth, containerHeight);
				this.setupColliders();
				this.checkResize();
			}

			update() {
				const curso = this.input.keyboard?.createCursorKeys();

				if (!curso) return

				if (curso.down.isDown || curso.left.isDown || curso.right.isDown || curso.up.isDown) {
					const { x, y } = this.nave;
					const inverseSizeX = -(-this.scale.width + x)
					this.nave.setScale(this.calculeScaleNave(inverseSizeX, y));

					if (curso.left.isDown && curso.down.isDown) {
						this.nave.setTexture('naveDescendo');
						this.nave.setFlipX(true);
						this.nave.setVelocityX(-100);
						this.nave.setVelocityY(100);
					}
					else if (curso.right.isDown && curso.down.isDown) {
						this.nave.setTexture('naveDescendo');
						this.nave.setFlipX(false);
						this.nave.setVelocityX(100);
						this.nave.setVelocityY(100);
					}
					else if (curso.up.isDown && curso.left.isDown) {
						this.nave.setTexture('naveCostas');
						this.nave.setFlipX(true);
						this.nave.setVelocityX(-100);
						this.nave.setVelocityY(-100);
					}
					else if (curso.up.isDown && curso.right.isDown) {
						this.nave.setTexture('naveCostas');
						this.nave.setFlipX(false);
						this.nave.setVelocityX(100);
						this.nave.setVelocityY(-100);
					}
					else if (curso.up.isDown) {
						this.nave.setTexture('naveCostas');
						this.nave.setVelocityY(-100);
					}
					else if (curso.down.isDown) {
						this.nave.setTexture('naveFrente');
						this.nave.setVelocityY(100);
					}
					else if (curso.left.isDown) {
						this.nave.setTexture('naveLateral');
						this.nave.setFlipX(true);
						this.nave.setVelocityX(-100);
					}
					else if (curso.right.isDown) {
						this.nave.setTexture('naveLateral');
						this.nave.setFlipX(false);
						this.nave.setVelocityX(100);
					}
				} else { // Se nenhuma tecla de seta estiver pressionada pare a nave
					this.nave.setVelocityY(0);
					this.nave.setVelocityX(0);
				}
			}
		}

		const gameConfig: Phaser.Types.Core.GameConfig = {
			type: Phaser.AUTO,
			width: window.innerWidth,
			height: window.innerHeight,
			physics: {
				default: 'arcade',
				arcade: {
					gravity: { x: 0, y: 0 },
					debug: false,
				}
			},
			scene: GameData,
			scale: {
				mode: Phaser.Scale.RESIZE,
				autoCenter: Phaser.Scale.CENTER_BOTH
			}
		};

		const game = new Phaser.Game(gameConfig);

		return () => {
			game.destroy(true);
		};
	}, []);


	return (
		<div ref={gameContainerRef} >
			{collisionPnt === 'planetTerra' && <Perfil />}
			{collisionPnt === 'planet42SP' && <PageSchool42 />}
			<AWSPage />
		</div>
	)
}

