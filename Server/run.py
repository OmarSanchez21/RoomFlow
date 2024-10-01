import subprocess
import sys
import os

def run_command(command, cwd):
    """Ejecuta un comando en un directorio específico y devuelve el proceso."""
    try:
        return subprocess.Popen(command, shell=True, cwd=cwd)
    except subprocess.CalledProcessError as e:
        print(f"Error ejecutando '{command}' en '{cwd}': {e}", file=sys.stderr)
        sys.exit(1)

def start_api():
    """Inicia el proyecto de la API."""
    print("Iniciando la API...")
    api_process = run_command("npm run dev", os.path.join("api"))  # Cambia según el comando que uses para iniciar la API
    return api_process

def start_documentation():
    """Inicia el proyecto de Documentación."""
    print("Iniciando la Documentación...")
    doc_process = run_command("npm start", os.path.join("doc"))  # Cambia según el comando que uses para iniciar la documentación
    return doc_process

def start_both():
    """Inicia ambos proyectos (API y Documentación)."""
    print("Iniciando la API y la Documentación...")
    api_process = start_api()
    doc_process = start_documentation()
    
    try:
        api_process.wait()
        doc_process.wait()
    except KeyboardInterrupt:
        print("\nInterrupción recibida, terminando...")
        api_process.terminate()
        doc_process.terminate()
        print("Procesos terminados!!")
        sys.exit(0)

def main():
    print("Selecciona la opción que deseas:")
    print("1. Iniciar la API")
    print("2. Iniciar la Documentación")
    print("3. Iniciar ambos proyectos")
    print("4. Salir")
    
    choice = input("Introduce el número de opción (1/2/3/4): ")
    
    if choice == '1':
        process = start_api()
        try:
            process.wait()
        except KeyboardInterrupt:
            print("\nInterrupción recibida, terminando...")
            process.terminate()
            print("Proceso terminado!!")
            sys.exit(0)
    elif choice == '2':
        process = start_documentation()
        try:
            process.wait()
        except KeyboardInterrupt:
            print("\nInterrupción recibida, terminando...")
            process.terminate()
            print("Proceso terminado!!")
            sys.exit(0)
    elif choice == '3':
        start_both()
        return
    elif choice == '4':
        print("Saliendo...")
        sys.exit(0)
    else:
        print("Opción no válida. Por favor, elige 1, 2, 3 o 4.")
        sys.exit(1)

if __name__ == "__main__":
    main()
