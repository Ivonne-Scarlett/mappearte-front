import React from 'react';
import classNames from 'classnames';
import Link from "next/link";

import OpacityCard from '../components/OpacityCard';

export default function avisoprivacidad() {
  return (
    <div className={classNames(
        'bg-privacidad bg-no-repeat bg-cover',
        'w-full min-h-screen md:max-h-full',
        'flex justify-center'
      )}>
          <OpacityCard className={classNames(
            "w-5/6 md:w-2/3 items-center my-8",
            "flex flex-col"
          )}>
            <div className="flex flex-col">
              {/* <img src='/icons/logoDesktop.png' alt='Logotipo' className='w-[40px] md:w-[50px] mb-2 mt-12' />
              <img src='/icons/MappeArteDesktop.png' alt='MappeArte brand' className='pl-1 w-[120px] md:w-[150px]' />  */}
              <div className="flex flex-row justify-between">
                <div>
                  <Link href={"/"} >
                    <img
                        src="/icons/logo.png"
                        alt="Logotipo mappearte"
                        className={classNames("w-32 md:w-40 lg:w-44", "md:mt-2", "cursor-pointer")}
                    />
                  </Link>
                </div>

                <div>
                  <Link href={"/"} >
                    <img 
                      src='/icons/cancel.png' 
                      alt='boton de cerrar' 
                      width='30px' 
                      height='30px'
                      className='p-4'/>
                  </Link>
                </div>
              </div>

              <div className="my-10 text-center">
                <h1>AVISO DE PRIVACIDAD</h1>
              </div>

              <div className="mb-5 text-justify">
                <p>
                  Mappearte mejor conocido como Mappearte, con domicilio en Colonia centro, Cuauhtémoc, CDMX y portal de internet https://mappearte.vercel.app, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente: <br></br><br></br>
                  ¿Para qué fines utilizaremos sus datos personales? <br></br>
                  Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita: <br></br><br></br>
                  Prestación de cualquier servicio solicitado <br></br><br></br>
                  ¿Qué datos personales utilizaremos para estos fines? <br></br>
                  Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales: <br></br><br></br>
                  Datos de identificación y contacto, Datos sobre pasatiempos<br></br><br></br> 
                  ¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso o ejercer la revocación de consentimiento? <br></br>
                  Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO. <br></br><br></br>
                  Para el ejercicio de cualquiera de los derechos ARCO, debe enviar una petición vía correo electrónico a privacidad@mappearte.mx y deberá contener: <br></br><br></br>
                  Nombre completo del titular.<br></br> 
                  Domicilio.<br></br> 
                  Teléfono.<br></br> 
                  Correo electrónico usado en este sitio web.<br></br> 
                  Copia de una identificación oficial adjunta.<br></br>
                  Asunto «Derechos ARCO»<br></br> 
                  Descripción el objeto del escrito, los cuales pueden ser de manera enunciativa más no limitativa los siguientes: Revocación del consentimiento para tratar sus datos personales; y/o Notificación del uso indebido del tratamiento de sus datos personales; y/o Ejercitar sus Derechos ARCO, con una descripción clara y precisa de los datos a Acceder, Rectificar, Cancelar o bien, Oponerse. En caso de Rectificación de datos personales, deberá indicar la modificación exacta y anexar la documentación soporte; es importante en caso de revocación del consentimiento, que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.<br></br><br></br> 
                  ¿En cuántos días le daremos respuesta a su solicitud?<br></br> 
                  10 días<br></br><br></br> 
                  ¿Por qué medio le comunicaremos la respuesta a su solicitud?<br></br> 
                  Al mismo correo electrónico de donde se envío la petición.<br></br><br></br> 
                  El uso de tecnologías de rastreo en nuestro portal de internet<br></br><br></br> 
                  Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes: <br></br><br></br>
                  Identificadores, nombre de usuario y contraseñas de sesión, Región en la que se encuentra el usuario, Fecha y hora del inicio y final de una sesión de un usuario <br></br><br></br> 
                  Estas cookies, web beacons y otras tecnologías pueden ser deshabilitadas. Para conocer cómo hacerlo, consulte el menú de ayuda de su navegador. Tenga en cuenta que, en caso de desactivar las cookies, es posible que no pueda acceder a ciertas funciones personalizadas en nuestros sitio web.<br></br><br></br> 
                  ¿Cómo puede conocer los cambios en este aviso de privacidad?<br></br>
                  El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas. Nos comprometemos a mantener actualizado este aviso de privacidad sobre los cambios que pueda sufrir y siempre podrá consultar las actualizaciones que existan en el sitio web https://mappearte.vercel.app. <br></br><br></br><br></br><br></br><br></br>
                  Última actualización de este aviso de privacidad: 09/05/2022
                </p>
              </div>



            
                
            </div>
         
  
            
            
          </OpacityCard>
    </div>
  )
}
