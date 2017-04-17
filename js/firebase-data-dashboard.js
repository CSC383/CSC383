window.onload = function(){

		firebase.database().ref("data_dashboard").on("value", snap => {	
			
			var labor_force_size_value = snap.child("labor_force_size").child("value").val();
			var average_annual_wage_value = snap.child("average_annual_wage").child("value").val();
			var gross_domestic_product_value = snap.child("gross_domestic_product").child("value").val();
			
			var labor_force_size_element = document.getElementById('labor_force_size')
			labor_force_size_element.innerText = labor_force_size_value
			var average_annual_wage_element = document.getElementById('average_annual_wage')
			average_annual_wage_element.innerText = average_annual_wage_value
			var gross_domestic_product_element = document.getElementById('gross_domestic_product')
			gross_domestic_product_element.innerText = gross_domestic_product_value
			
			var ctx = document.getElementById("myChart1");
			var myChart = new Chart(ctx, {
		    		type: 'bar',
		    		data: {
					labels: ["Labor Force Size", "Average Annual Wage", "Gross Domestic Product"],
					datasets: [{
			    			label: 'General Economic Performance',
			    			data: [labor_force_size_value, average_annual_wage_value, gross_domestic_product_value],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
			    			],
			    			borderColor: [
							'rgba(255,99,132,1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
			    			],
			    			borderWidth: 1
					}]
		    		},
		    		options: {
					scales: {
			    			yAxes: [{
							ticks: {
				    			beginAtZero:true
							}
			    			}]
					}
		    		}
			});
					
			var unemployment_rate_value = snap.child("unemployment_rate").child("value").val();
			var poverty_rate_value = snap.child("poverty_rate").child("value").val();
			var closings_value = snap.child("closings").child("value").val();
			
			var unemployment_rate_element = document.getElementById('unemployment_rate')
			unemployment_rate_element.innerText = unemployment_rate_value
			var poverty_rate_element = document.getElementById('poverty_rate')
			poverty_rate_element.innerText = poverty_rate_value
			var closings_element = document.getElementById('closings')
			closings_element.innerText = closings_value
	
			var dtx = document.getElementById("myChart2");
			var myChart = new Chart(dtx, {
		    		type: 'line',
		    		data: {
					labels: ["Unemployment Rate", "Poverty Rate", "Closings"],
					datasets: [{
			    		label: 'Test line Graph',
			    		data: [unemployment_rate_value, poverty_rate_value, closings_value],
						backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
			    		],
			    		borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
			    		],
			    		borderWidth: 1
					}]
		    		},
		    		options: {
					scales: {
			    		yAxes: [{
						ticks: {
				    		beginAtZero:true
						}
			    		}]
					}
		    		}
			});
	
			var cost_of_living_value = snap.child("cost_of_living").child("value").val();
			var new_housing_costs_value = snap.child("new_housing_costs").child("value").val();
			var average_annual_commute_time_value = snap.child("average_annual_commute_time").child("value").val();
			var jobs_employed_resident_ratio_value = snap.child("jobs_employed_resident_ratio").child("value").val();
			
			var cost_of_living_element = document.getElementById('cost_of_living')
			cost_of_living_element.innerText = cost_of_living_value
			var new_housing_costs_element = document.getElementById('new_housing_costs')
			new_housing_costs_element.innerText = new_housing_costs_value
			var average_annual_commute_time_element = document.getElementById('average_annual_commute_time')
			average_annual_commute_time_element.innerText = average_annual_commute_time_value
			var jobs_employed_resident_ratio_element = document.getElementById('jobs_employed_resident_ratio')
			jobs_employed_resident_ratio_element.innerText = jobs_employed_resident_ratio_value
	
			var pie_data = {
    				labels: [
        			"Cost of Living",
        			"New Housing Costs",
        			"Average Annual Commute Time",
        			"Jobs Employed Resident Ratio"
    				],
    				datasets: [
        			{
            			data: [cost_of_living_value, new_housing_costs_value, average_annual_commute_time_value, jobs_employed_resident_ratio_value],
            			backgroundColor: [
                			"#FF6384",
                			"#36A2EB",
                			"#FFCE56"
            			],
           	 		hoverBackgroundColor: [
                			"#FF6384",
                			"#36A2EB",
                			"#FFCE56"
            			]
        			}]
			};
			var etx = document.getElementById("myChart3");
			var myPieChart = new Chart(etx,{
    				type: 'pie',
    				data: pie_data,
    				options: {
        				animation:{
            					animateScale:true
        				}
    				}
			});
	
			var new_business_starts_value = snap.child("new_business_starts").child("value").val();
			var stage_ii_establishments_value = snap.child("stage_ii_establishments").child("value").val();
			var sbir_grants_value = snap.child("sbir_grants").child("value").val();
			var stem_employment_value = snap.child("stem_employment").child("value").val();
			var broadband_access_value = snap.child("broadband_access").child("value").val();
			var churn_rate_value = snap.child("churn_rate").child("value").val();
			
			var new_business_starts_element = document.getElementById('new_business_starts')
			new_business_starts_element.innerText = new_business_starts_value
			var stage_ii_establishments_element = document.getElementById('stage_ii_establishments')
			stage_ii_establishments_element.innerText = stage_ii_establishments_value
			var sbir_grants_element = document.getElementById('sbir_grants')
			sbir_grants_element.innerText = sbir_grants_value
			var stem_employment_element = document.getElementById('stem_employment')
			stem_employment_element.innerText = stem_employment_value
			var broadband_access_element = document.getElementById('broadband_access')
			broadband_access_element.innerText = broadband_access_value
			var churn_rate_element = document.getElementById('churn_rate')
			churn_rate_element.innerText = churn_rate_value
	
			var bubble_data = {
				datasets: [{
					label: 'First Dataset',
					data: [
						{
							x: new_business_starts_value,
							y: stage_ii_establishments_value,
							r: 5
						}
					],
					backgroundColor:"#FF6384",
					hoverBackgroundColor: "#FF6384",
				},
				{
					label: 'Second Dataset',
					data: [
						{
							x: sbir_grants_value,
							y: stem_employment_value,
							r: 5
						}
					],
					backgroundColor:"#36A2EB",
					hoverBackgroundColor: "#36A2EB",
				},
				{
					label: 'Third Dataset',
					data: [
						{
							x: broadband_access_value,
							y: churn_rate_value,
							r: 5
						}
					],
					backgroundColor:"#FFCE56",
					hoverBackgroundColor: "#FFCE56",
				}]
			};
	
			var ftx = document.getElementById("myChart4");
			var myBubbleChart = new Chart(ftx,{
    				type: 'bubble',
    				data: bubble_data,
    				options: {
        				elements: {
           					 points: {
                					borderWidth: 1,
                					borderColor: 'rgb(0, 0, 0)'
            					}
        				}
    				}
			});
			
		});
};
