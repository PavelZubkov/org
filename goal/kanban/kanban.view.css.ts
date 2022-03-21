namespace $.$$ {

	const { rem, px } = $mol_style_unit

	$mol_style_define( $org_goal_kanban , {

		flex: {
			basis: rem(40),
		},

		List: {
			flex: {
				direction: 'row'
			},
		},

	} )

	$mol_style_define( $org_goal_kanban_stage , {

		display: 'flex',

		flex: {
			direction: 'column',
			shrink: 0,
			basis: rem(10),
		},

		border: {
			style: 'dashed',
			width: px(1),
			color: $mol_theme.line,
		},

		margin: $mol_gap.space,

		Drop: {
			'@': {
				mol_drop_status: {
					drag: {
						boxShadow: `-1px 0 0 0 ${ $mol_theme.focus }`,
					},
				},
			},
		},

	} )

	$mol_style_define( $org_goal_kanban_card , {

		height: rem(5),
		background: {
			color: $mol_theme.field,
		},
		margin: {
			top: $mol_gap.space,
			bottom: $mol_gap.space,
		}

	} )

}
