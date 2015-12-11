import web
import setup

def make_text(string):
	return string

urls = ('/', 'popup')
render = web.template.render('templates/')
app = web.application(urls, globals())

my_form = web.form.Form(
		web.form.Textbox('', class_='textfield')
		)

class popup:
    def GET(self):
        form = my_form()
        return render.popup(form, "Your text goes here.")
         
    def POST(self):
        form = my_form()
        form.validates()
        s = form.value['textfield']
        return make_text(s)
 
if __name__ == '__main__':
    app.run()