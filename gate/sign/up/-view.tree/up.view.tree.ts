namespace $ {
	export class $org_gate_sign_up extends $mol_page {
		
		/**
		 * ```tree
		 * domain $org_gate_domain
		 * ```
		 */
		@ $mol_mem
		domain() {
			const obj = new this.$.$org_gate_domain()
			
			return obj
		}
		
		/**
		 * ```tree
		 * title @ \Sign up
		 * ```
		 */
		title() {
			return this.$.$mol_locale.text( '$org_gate_sign_up_title' )
		}
		
		/**
		 * ```tree
		 * body / <= Form
		 * ```
		 */
		body() {
			return [
				this.Form()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * name_label @ \Login
		 * ```
		 */
		name_label() {
			return this.$.$mol_locale.text( '$org_gate_sign_up_name_label' )
		}
		
		/**
		 * ```tree
		 * name?val \
		 * ```
		 */
		@ $mol_mem
		name(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * Name_control $mol_string value?val <=> name?val
		 * ```
		 */
		@ $mol_mem
		Name_control() {
			const obj = new this.$.$mol_string()
			
			obj.value = (val?: any) => this.name(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Name $mol_form_field
		 * 	name <= name_label
		 * 	control <= Name_control
		 * ```
		 */
		@ $mol_mem
		Name() {
			const obj = new this.$.$mol_form_field()
			
			obj.name = () => this.name_label()
			obj.control = () => this.Name_control()
			
			return obj
		}
		
		/**
		 * ```tree
		 * pass_label @ \Password
		 * ```
		 */
		pass_label() {
			return this.$.$mol_locale.text( '$org_gate_sign_up_pass_label' )
		}
		
		/**
		 * ```tree
		 * pass?val \
		 * ```
		 */
		@ $mol_mem
		pass(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * Pass_control $mol_string
		 * 	value?val <=> pass?val
		 * 	type \password
		 * ```
		 */
		@ $mol_mem
		Pass_control() {
			const obj = new this.$.$mol_string()
			
			obj.value = (val?: any) => this.pass(val)
			obj.type = () => "password"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Pass $mol_form_field
		 * 	name <= pass_label
		 * 	control <= Pass_control
		 * ```
		 */
		@ $mol_mem
		Pass() {
			const obj = new this.$.$mol_form_field()
			
			obj.name = () => this.pass_label()
			obj.control = () => this.Pass_control()
			
			return obj
		}
		
		/**
		 * ```tree
		 * submit_label @ \Submit
		 * ```
		 */
		submit_label() {
			return this.$.$mol_locale.text( '$org_gate_sign_up_submit_label' )
		}
		
		/**
		 * ```tree
		 * submit_event?val null
		 * ```
		 */
		@ $mol_mem
		submit_event(val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Submit $mol_button_major
		 * 	title <= submit_label
		 * 	click?val <=> submit_event?val
		 * ```
		 */
		@ $mol_mem
		Submit() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => this.submit_label()
			obj.click = (val?: any) => this.submit_event(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Form $mol_form
		 * 	form_fields /
		 * 		<= Name
		 * 		<= Pass
		 * 	buttons / <= Submit
		 * ```
		 */
		@ $mol_mem
		Form() {
			const obj = new this.$.$mol_form()
			
			obj.form_fields = () => [
				this.Name(),
				this.Pass()
			] as readonly any[]
			obj.buttons = () => [
				this.Submit()
			] as readonly any[]
			
			return obj
		}
	}
	
}

