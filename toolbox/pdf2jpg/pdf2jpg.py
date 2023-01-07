from pdf2image import convert_from_path
from tkinter import *
from tkinter import messagebox
from tkinter import filedialog
import sys,os


def pdf2img():
    file_add = filedialog.askopenfilename()
    print(file_add)
    pages = convert_from_path(pdf_path=file_add, poppler_path="./poppler-0.68.0/bin")
    for i in range(len(pages)):
        pages[i].save('page'+ str(i) +'.jpg', 'JPEG')


master = Tk()
Label(master, text="File Location").grid(row=0, sticky=W)

# e1 = Entry(master)
# e1.grid(row=0, column=1)

b = Button(master, text="Convert", command=pdf2img)
b.grid(row=0, column=2,columnspan=2, rowspan=2,padx=5, pady=5)


mainloop()
