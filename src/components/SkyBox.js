import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

export default function SkyBox() {
	const { scene } = useThree();
	const loader = new CubeTextureLoader();
	const texture = loader.load([
	  "/brudslojan/posx.jpg",
	  "/brudslojan/negx.jpg",
	  "/brudslojan/posy.jpg",
	  "/brudslojan/negy.jpg",
	  "/brudslojan/posz.jpg",
	  "/brudslojan/negz.jpg"
	]);
  
	scene.background = texture;
	return null;
  }