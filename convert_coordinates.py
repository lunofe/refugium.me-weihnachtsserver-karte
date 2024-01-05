while True:
    x = int(input("X: "))
    z = int(input("Z: "))

    if x < 0 and z < 0:
        print(f"{str(z).replace('-','')}, {x}\n")
    elif x > 0 and z < 0:
        print(f"{str(z).replace('-','')}, {x}\n")
    elif x < 0 and z > 0:
        print(f"-{z}, {x}\n")
    elif x > 0 and z > 0:
        print(f"-{z}, {x}\n")
