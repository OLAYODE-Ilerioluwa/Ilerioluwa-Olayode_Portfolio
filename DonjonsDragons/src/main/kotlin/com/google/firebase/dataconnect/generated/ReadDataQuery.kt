
@file:Suppress(
  "KotlinRedundantDiagnosticSuppress",
  "PropertyName",
  "MayBeConstant",
  "RedundantVisibilityModifier",
  "RedundantCompanionReference",
  "RemoveEmptyClassBody",
  "SpellCheckingInspection",
  "unused",
)

package com.google.firebase.dataconnect.generated


import kotlinx.coroutines.flow.filterNotNull as _flow_filterNotNull
import kotlinx.coroutines.flow.map as _flow_map


public interface ReadDataQuery :
    com.google.firebase.dataconnect.generated.GeneratedQuery<
      ExampleConnector,
      ReadDataQuery.Data,
      Unit
    >
{
  

  
    @kotlinx.serialization.Serializable
  public data class Data(
  
    val client: Client?,
  
    val project: Project?,
  
    val lead: Lead?,
  
    val milestone: Milestone?,
  
    val asset: Asset?,
  
    val clients: List<ClientsItem>,
  
    val projects: List<ProjectsItem>,
  
    val leads: List<LeadsItem>,
  
    val milestones: List<MilestonesItem>,
  
    val assets: List<AssetsItem>,
  
  ) {
    
      
        @kotlinx.serialization.Serializable
  public data class Client(
  
    val name: String,
  
    val email: String,
  
  ) {
    
    
  }
      
        @kotlinx.serialization.Serializable
  public data class Project(
  
    val title: String,
  
    val budget: Double,
  
  ) {
    
    
  }
      
        @kotlinx.serialization.Serializable
  public data class Lead(
  
    val contactName: String,
  
    val projectBrief: String,
  
  ) {
    
    
  }
      
        @kotlinx.serialization.Serializable
  public data class Milestone(
  
    val title: String,
  
    val dueDate: com.google.firebase.dataconnect.LocalDate?,
  
  ) {
    
    
  }
      
        @kotlinx.serialization.Serializable
  public data class Asset(
  
    val url: String,
  
    val type: String,
  
  ) {
    
    
  }
      
        @kotlinx.serialization.Serializable
  public data class ClientsItem(
  
    val name: String,
  
  ) {
    
    
  }
      
        @kotlinx.serialization.Serializable
  public data class ProjectsItem(
  
    val title: String,
  
  ) {
    
    
  }
      
        @kotlinx.serialization.Serializable
  public data class LeadsItem(
  
    val contactName: String,
  
  ) {
    
    
  }
      
        @kotlinx.serialization.Serializable
  public data class MilestonesItem(
  
    val title: String,
  
  ) {
    
    
  }
      
        @kotlinx.serialization.Serializable
  public data class AssetsItem(
  
    val url: String,
  
  ) {
    
    
  }
      
    
    
  }
  

  public companion object {
    public val operationName: String = "ReadData"

    public val dataDeserializer: kotlinx.serialization.DeserializationStrategy<Data> =
      kotlinx.serialization.serializer()

    public val variablesSerializer: kotlinx.serialization.SerializationStrategy<Unit> =
      kotlinx.serialization.serializer()
  }
}

public fun ReadDataQuery.ref(
  
): com.google.firebase.dataconnect.QueryRef<
    ReadDataQuery.Data,
    Unit
  > =
  ref(
    
      Unit
    
  )

public suspend fun ReadDataQuery.execute(

  
    fetchPolicy: com.google.firebase.dataconnect.QueryRef.FetchPolicy = com.google.firebase.dataconnect.QueryRef.FetchPolicy.PREFER_CACHE,
  

  ): com.google.firebase.dataconnect.QueryResult<
    ReadDataQuery.Data,
    Unit
  > =
  ref(
    
  ).execute(fetchPolicy = fetchPolicy)


  public fun ReadDataQuery.flow(
    
    ): kotlinx.coroutines.flow.Flow<ReadDataQuery.Data> =
    ref(
        
      ).subscribe()
      .flow
      ._flow_map { querySubscriptionResult -> querySubscriptionResult.result.getOrNull() }
      ._flow_filterNotNull()
      ._flow_map { it.data }

