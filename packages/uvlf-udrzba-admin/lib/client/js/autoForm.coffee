# Add hooks used by many forms
AutoForm.addHooks [
		'admin_insert',
		'admin_update',
		'adminNewUser',
		'adminUpdateUser',
		'adminSendResetPasswordEmail',
		'adminChangePassword'],
	beginSubmit: ->
		$('.btn-primary').addClass('disabled')
	endSubmit: ->
		$('.btn-primary').removeClass('disabled')
	onError: (formType, error)->
		AdminDashboard.alertFailure error.message

AutoForm.hooks
	admin_insert:
		onSubmit: (insertDoc, updateDoc, currentDoc)->
			hook = @
			Meteor.call 'adminInsertDoc', insertDoc, Session.get('admin_collection_name'), (e,r)->
				if e
					hook.done(e)
				else
					adminCallback 'onInsert', [Session.get 'admin_collection_name', insertDoc, updateDoc, currentDoc], (collection) ->
						hook.done null, collection
			return false
		onSuccess: (formType, collection)->
			AdminDashboard.alertSuccess 'Úspešne vytvorené'
			FlowRouter.go "/admin/view/#{collection}"

	admin_update:
		onSubmit: (insertDoc, updateDoc, currentDoc)->
			hook = @
			Meteor.call 'adminUpdateDoc', updateDoc, Session.get('admin_collection_name'), @docId, (e,r)->
				if e
					hook.done(e)
				else
					adminCallback 'onUpdate', [Session.get 'admin_collection_name', insertDoc, updateDoc, currentDoc], (collection) ->
						hook.done null, collection
			return false
		onSuccess: (formType, collection)->
			AdminDashboard.alertSuccess 'Úspešne aktualizované'

	adminNewUser:
		onSuccess: (formType, result)->
			AdminDashboard.alertSuccess 'Vytvoriť užívateľa'

	adminUpdateUser:
		onSubmit: (insertDoc, updateDoc, currentDoc)->
			Meteor.call 'adminUpdateUser', updateDoc, Session.get('admin_id'), @done
			return false
		onSuccess: (formType, result)->
			AdminDashboard.alertSuccess 'Aktualizovaný užívateľ'

	adminSendResetPasswordEmail:
		onSuccess: (formType, result)->
			AdminDashboard.alertSuccess 'Email odoslaný'

	adminChangePassword:
		onSuccess: (operation, result, template)->
			AdminDashboard.alertSuccess 'Heslo zresetované'
