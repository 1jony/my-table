
"use client"; // Habilita el cliente en este componente
import styles from './login.module.css'
import Image from 'next/image'
import logoMArver from '@/public/loginImage/logo marver.png'
import { useState} from 'react';
import React from 'react';
import { useRouter } from 'next/router';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
export default  function Login() {
    const [viewPass,setViewPass] = useState<boolean>(false);
    const [formData,setFormData] = useState({
        sucursal:"",
        user:"",
        password:""
    })
    const router = useRouter();
    const handleLoging = async (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        
       // Acceder a los elementos del formulario
        const form = event.currentTarget;
        const sucursal = await (form.elements.namedItem("sucursal") as HTMLInputElement).value;
        const user = await (form.elements.namedItem("user") as HTMLInputElement).value;
        const password = await(form.elements.namedItem("password") as HTMLInputElement).value;
        console.log(user)

        setFormData({
            sucursal,
            user,
            password
        });

        router.push('/'); // Redirige a la página de inicio
        console.log(formData)

    }
    return(
        <>
            <div className={styles.container}>
                <form onSubmit={handleLoging} className={styles.loginFrom}>
                <Image
                    src={logoMArver}
                    style={{ width: '100%', height: 'auto',maxWidth:'350px' }} // Hacer que sea responsive
                    alt="Picture of the author"
                />
                    <select name='sucursal' defaultValue='default'>
                        <option value='default' disabled>seleccione una sucursal</option>
                        <option value='mochis' >Marver Mochis</option>
                        <option value='higuera' >Marver Higuera</option>
                        <option value='almacen higuera'>Almacen Higuera</option>
                        <option value={'guasabe'} >Marver Guasave</option>
                    </select>
                    <span style={{visibility:formData.sucursal ==="" || formData.sucursal ==="default'" ?"visible":"hidden"}}> Selecciones una sucursal.</span>
                    <input name='user' placeholder='Almacen' type='text'></input>
                    <span style={{visibility:formData.user ==="" ?"visible":"hidden"}}> Usuario requerido.</span>
                    <div  className={styles.contPass}>
                        <input name='password' placeholder='********' type={viewPass? 'password':'text'}></input>
                        <span onClick={()=>setViewPass(!viewPass)}>
                            {viewPass ?<VisibilityOffIcon  sx={{color:'#f31260'}}/>:<VisibilityIcon sx={{color:'#f31260'}}/>}
                        </span>
                    </div>
                    <span style={{visibility:formData.password ==="" ? "visible":"hidden"}}>Contraseña requerida.</span>
                    <button type="submit">Inicia sesión</button>
                </form>
            </div>
        </>
    )

}