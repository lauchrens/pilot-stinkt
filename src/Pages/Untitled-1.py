import random
import string


def nitro_gen():
    return ''.join(random.choices(string.ascii_uppercase + string.digits + string.ascii_lowercase, k=16))


output_file = open("nitro_codes.txt", "w")
for i in range(100):
    output_file.write(nitro_gen() + "\n")
output_file.close()
