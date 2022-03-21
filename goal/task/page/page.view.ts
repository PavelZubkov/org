namespace $.$$ {

	export class $org_goal_task_page extends $.$org_goal_task_page {

		name( next?: string ) {
			return this.task().title( next ) || this.text().task_new
		}

		descr( next?: string ) {
			return this.task().description( next )
		}

		created() {
			return this.task().created().toString( 'YYYY-MM-DD hh:mm' )
		}

		executor( next?: string ) {
			if ( next === undefined ) {
				return this.task().executor().id()
			}
			return this.task().executor( this.task().domain().person( next ) ).id()
		}

		executor_dict() {
			const entities = this.task().project().person_list().map( obj => [ obj.id() , obj.name() ] )
			const dict = Object.fromEntries( entities )
			return dict
		}

	}

}
